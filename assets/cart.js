class CartRemoveButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');

    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);

    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === 'cart-items') {
        return;
      }
      this.onCartUpdate();
    });
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  onChange(event) {
    const lineItemKey = event.target.dataset.lineItemKey;
    this.updateQuantity(lineItemKey, event.target.value, document.activeElement.getAttribute('name'));
  }

  onCartUpdate() {
    fetch('/cart?section_id=main-cart-items')
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const sourceQty = html.querySelector('cart-items');
        this.innerHTML = sourceQty.innerHTML;
      })
      .catch(e => {
        console.error(e);
      });
  }

  getSectionsToRender() {
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents'
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents'
      }
    ];
  }

  updateQuantity(lineItemKey, quantity, name) {
    this.enableLoading(lineItemKey);

    const body = JSON.stringify({
      key: lineItemKey,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        let parsedState = JSON.parse(state);

        function proceedWithState(stateToUse) {
          const quantityElement = document.querySelector(`[data-line-item-key="${lineItemKey}"]`);
          const items = document.querySelectorAll('.cart-item');

          if (stateToUse.errors) {
            quantityElement.value = quantityElement.getAttribute('value');
            this.updateLiveRegions(lineItemKey, stateToUse.errors);
            return;
          }

          this.classList.toggle('is-empty', stateToUse.item_count === 0);
          const cartDrawerWrapper = document.querySelector('cart-drawer');
          const cartFooter = document.getElementById('main-cart-footer');

          if (cartFooter) cartFooter.classList.toggle('is-empty', stateToUse.item_count === 0);
          if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', stateToUse.item_count === 0);

          if (stateToUse.sections) {
            this.getSectionsToRender().forEach((section) => {
              const elementToReplace = document.getElementById(section.id);
              if (!elementToReplace) return;

              const sectionContent = stateToUse.sections[section.section];
              if (!sectionContent) return;

              const selector = section.selector;
              const element = elementToReplace.querySelector(selector) || elementToReplace;
              if (!element) return;

              try {
                element.innerHTML = this.getSectionInnerHTML(sectionContent, selector);
              } catch (error) {
                console.error('Error updating section:', error);
              }
            });
          }

          // Find cart item by key
          let message = '';
          try {
            const cartItems = Array.isArray(stateToUse.items) ? stateToUse.items : [];
            const currentProduct = cartItems.find(item => item.key === lineItemKey);
            if (!currentProduct) {
              console.error('[CRITICAL] Could not find cart item by key!', {cartItems, lineItemKey, stateToUse});
            }
            const currentQuantity = parseInt(quantityElement?.value || '0', 10);
            const updatedValue = currentProduct ? currentProduct.quantity : undefined;

            if (cartItems.length === stateToUse.items?.length &&
                typeof updatedValue === 'number' &&
                updatedValue !== currentQuantity) {
              message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
            } else if (typeof updatedValue === 'undefined') {
              message = window.cartStrings.error;
            }
          } catch (error) {
            console.error('Error processing quantity update:', error);
            message = window.cartStrings.error;
          }

          this.updateLiveRegions(lineItemKey, message);

          // Handle focus management
          // (You may want to update this logic to use the key as well)
          publish(PUB_SUB_EVENTS.cartUpdate, {source: 'cart-items'});
        }

        if (!Array.isArray(parsedState.items) || parsedState.items.length === 0) {
          console.warn('Fallback: items missing from AJAX response, fetching /cart.js');
          fetch('/cart.js')
            .then(res => res.json())
            .then(fullCart => {
              parsedState.items = fullCart.items;
              parsedState.item_count = fullCart.item_count;
              proceedWithState.call(this, parsedState);
            });
        } else {
          proceedWithState.call(this, parsedState);
        }
      }).catch((error) => {
        console.error('Cart update error:', error);
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.disableLoading(lineItemKey);
      });
  }

  updateLiveRegions(line, message) {
    const lineItemError = document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
    if (lineItemError) lineItemError.querySelector('.cart-item__error-text').innerHTML = message;

    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
    cartDrawerItemElements.forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('cart-items', CartItems);

if (!customElements.get('cart-note')) {
  customElements.define('cart-note', class CartNote extends HTMLElement {
      constructor() {
        super();

      this.addEventListener('change', debounce((event) => {
            const body = JSON.stringify({ note: event.target.value });
            fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } });
      }, ON_CHANGE_DEBOUNCE_TIMER))
      }
  });
};

function findCartItem(items, variantId, properties = null) {
  return items.find(item => {
    if (item.id != variantId) return false;
    if (properties) {
      for (const key in properties) {
        if (item.properties?.[key] !== properties[key]) return false;
      }
    }
    return true;
  });
}
