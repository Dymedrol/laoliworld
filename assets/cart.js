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
    this.currentRequests = new Set();

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
    const variantId = event.target.dataset.quantityVariantId;
    this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'), variantId);
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
        section: document.getElementById('main-cart-items')?.dataset?.id || 'main-cart-items',
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
        section: document.getElementById('main-cart-footer')?.dataset?.id || 'main-cart-footer',
        selector: '.js-contents'
      }
    ].filter(section => section.section);
  }

  updateQuantity(line, quantity, name, variantId) {
    if (!line || isNaN(parseInt(line))) {
      console.error('Invalid line number:', line);
      return;
    }
    
    if (quantity !== 0 && (!quantity || isNaN(parseInt(quantity)))) {
      console.error('Invalid quantity:', quantity);
      return;
    }

    const lineNumber = parseInt(line);
    
    if (this.currentRequests.has(lineNumber)) {
      console.warn('Request already in progress for line', lineNumber);
      return;
    }
    
    this.currentRequests.add(lineNumber);
    this.enableLoading(lineNumber);

    const body = JSON.stringify({
      line: lineNumber,
      quantity: parseInt(quantity),
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_change_url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((state) => {
        let parsedState;
        try {
          parsedState = JSON.parse(state);
        } catch (e) {
          console.error('JSON parse error:', e);
          throw new Error('Invalid response format');
        }

        if (parsedState.status && parsedState.status !== 200) {
          throw new Error(parsedState.message || 'Cart update failed');
        }

        function proceedWithState(stateToUse) {
          const quantityElement = document.getElementById(`Quantity-${lineNumber}`) || document.getElementById(`Drawer-quantity-${lineNumber}`);
          const items = document.querySelectorAll('.cart-item');

          if (stateToUse.errors) {
            quantityElement.value = quantityElement.getAttribute('value');
            this.updateLiveRegions(lineNumber, stateToUse.errors);
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

          let message = '';
          try {
            const cartItems = Array.isArray(stateToUse.items) ? stateToUse.items : [];
            console.log('[DEBUG] CartItems:', cartItems);
            console.log('[DEBUG] variantId:', variantId, 'line:', lineNumber);
            console.log('[DEBUG] stateToUse:', stateToUse);
            
            let currentProduct = null;
            
            if (variantId) {
              currentProduct = cartItems.find(item => 
                item && String(item.variant_id) === String(variantId)
              );
              
              if (!currentProduct) {
                currentProduct = cartItems.find(item => 
                  item && String(item.id) === String(variantId)
                );
              }
            }
            
            if (!currentProduct && lineNumber > 0 && lineNumber <= cartItems.length) {
              currentProduct = cartItems[lineNumber - 1];
            }
            
            if (!currentProduct || typeof currentProduct !== 'object') {
              console.error('[CRITICAL] Could not find cart item!', {
                cartItems, 
                variantId, 
                line: lineNumber, 
                stateToUse,
                availableIds: cartItems.map(item => ({ id: item?.id, variant_id: item?.variant_id }))
              });
            }
            
            console.log('[DEBUG] currentProduct:', currentProduct);
            
            const currentQuantity = parseInt(quantityElement?.value || '0', 10);
            const updatedValue = currentProduct?.quantity;
            
            if (currentProduct && typeof updatedValue === 'number') {
              if (cartItems.length === stateToUse.items?.length && updatedValue !== currentQuantity) {
                message = window.cartStrings?.quantityError?.replace('[quantity]', updatedValue) || 
                         `Quantity updated to ${updatedValue}`;
              }
            } else if (!currentProduct) {
              message = window.cartStrings?.itemRemoved || 'Item removed from cart';
            } else {
              message = window.cartStrings?.error || 'An error occurred';
            }
            
          } catch (error) {
            console.error('Error processing quantity update:', error);
            message = window.cartStrings?.error || 'An error occurred updating your cart';
          }

          this.updateLiveRegions(lineNumber, message);

          const lineItem = document.getElementById(`CartItem-${lineNumber}`) || document.getElementById(`CartDrawer-Item-${lineNumber}`);
          if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
            cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
          } else if (stateToUse.item_count === 0 && cartDrawerWrapper) {
            trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
          } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
            trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
          }
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
            })
            .catch(fallbackError => {
              console.error('Fallback cart fetch failed:', fallbackError);
              proceedWithState.call(this, parsedState);
            });
        } else {
          proceedWithState.call(this, parsedState);
        }
      }).catch((error) => {
        console.error('Cart update error:', error);
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        if (errors) {
          errors.textContent = window.cartStrings?.error || 'An error occurred';
        }
      })
      .finally(() => {
        this.currentRequests.delete(lineNumber);
        this.disableLoading(lineNumber);
      });
  }

  updateLiveRegions(line, message) {
    const lineItemError = document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
    if (lineItemError) {
      const errorText = lineItemError.querySelector('.cart-item__error-text');
      if (errorText) {
        errorText.innerHTML = message;
      }
    }

    if (this.lineItemStatusElement) {
      this.lineItemStatusElement.setAttribute('aria-hidden', true);
    }

    const cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    if (cartStatus) {
      cartStatus.setAttribute('aria-hidden', false);
      setTimeout(() => {
        cartStatus.setAttribute('aria-hidden', true);
      }, 1000);
    }
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    if (mainCartItems) {
      mainCartItems.classList.add('cart__items--disabled');
    }

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    if (document.activeElement) {
      document.activeElement.blur();
    }
    
    if (this.lineItemStatusElement) {
      this.lineItemStatusElement.setAttribute('aria-hidden', false);
    }
  }

  disableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    if (mainCartItems) {
      mainCartItems.classList.remove('cart__items--disabled');
    }

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('cart-items', CartItems);

if (!customElements.get('cart-note')) {
  customElements.define('cart-note', class CartNote extends HTMLElement {
    constructor() {
      super();

      this.addEventListener('change', debounce((event) => {
        const body = JSON.stringify({ note: event.target.value });
        fetch(`${routes.cart_update_url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update cart note');
          }
          return response.json();
        })
        .catch(error => {
          console.error('Cart note update failed:', error);
        });
      }, ON_CHANGE_DEBOUNCE_TIMER))
    }
  });
};
