export const openCart = () => {
    const cart = $('.laoli-cart-wrapper');
    const closeButton = cart.find('.laoli-cart-close');
    const content = cart.find('.js-cart-content');
    const empty = cart.find('.js-cart-empty');
    const itemsWrapper = cart.find('.laoli-cart-items');
    const loading = cart.find('.js-cart-loading');
    const template = cart.find('#cart-item-template');
    const totalPrice = cart.find('.js-cart-total');
    const cartCount = $('.js-cart-count');
    const cartCheckout = $('.js-cart-checkout');
    const duration = $('.laoli-cart-footer-duration');

    const getPrice = function(price) {
        const newPrice = price.toString();
        const xx = newPrice.length - 2;
        const updatedPrice = newPrice.substring(0, xx) + "." + newPrice.substring(xx, newPrice.length)

        return updatedPrice
    }

    const cartItem = (item) => `
    <div class="laoli-cart-item" data-id="${item.id}" data-handle="${item.handle}">
        <div class="laoli-cart-item-pic-wrapper">
            <div class="laoli-cart-item-pic-lavel ${item.inventory_quantity > 0 ? 'hidden' : ''}">made to order</div>
            <img src="${item.featured_image.url}&width=200" alt="" class="laoli-cart-item-pic">
        </div>
        <div class="laoli-cart-item-info">
            <div class="laoli-cart-item-info-price">${item.currency} ${getPrice(item.final_price)}</div>
            <div class="laoli-cart-item-info-upperblock">
                <div class="laoli-cart-item-info-title">${item.product_title}</div>
                <div class="laoli-cart-item-info-size ${item.options_with_values[0].name == 'Size' ? '' : 'hidden'}">Size: ${item.options_with_values[0].value}</div>
            </div>
            <div class="laoli-cart-item-info-loweblock">
                <div class="laoli-cart-item-info-quantity">
                    <span class="cursor-pointer js-cart-minus">-</span>
                    <span class="js-cart-quantity">${item.quantity}</span>
                    <span class="cursor-pointer js-cart-plus">+</span>
                </div>
                <div class="laoli-cart-item-info-remove js-cart-remove cursor-pointer">Remove</div>
            </div>
        </div>
    </div>

    `;

    const getCart = function() {

        fetch(window.Shopify.routes.root + 'cart.js', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(response => response.json())
        .then(result => {

            if (result.item_count == 0) {
                loading.hide();
                empty.show();
                return
            }

            var currency = result.currency;

            if (currency == 'EUR') {
                currency = '€'
            }

            if (currency == 'USD') {
                currency = '$'
            }

            const items = result.items;

            items.forEach(function(item) {
                item.currency = currency;
                const currentProduct = products.find((product) => product.id == item.id);
                item.inventory_quantity = currentProduct.quantity;

                if (item.inventory_quantity < 1) {
                    duration.removeClass('hidden');
                }
            });

            itemsWrapper.html(items.map(cartItem).join(''));

            totalPrice.text(currency + ' ' + getPrice(result.total_price));

            loading.hide();
            content.css('display', 'flex');

            itemsWrapper.find('.js-cart-remove').click(function() {
                const item = $(this).closest('.laoli-cart-item');
                const id = item.attr('data-id');
                const quantity =  item.find('.js-cart-quantity').text();

                let formData = {
                  'id': id,
                  'quantity': 0
                };

                fetch(window.Shopify.routes.root + 'cart/change.js', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                .then(response => {
                  return response.json();
                })
                .then(result => {
                    item.remove();

                    if (result.item_count > 0) {
                        cartCount.text(' (' + result.item_count + ')');
                    } else {
                        content.css('display', 'none');
                        empty.show();
                        cartCount.text('');
                    }

                    totalPrice.text(currency + ' ' + getPrice(result.original_total_price));
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            });

            itemsWrapper.find('.js-cart-plus').click(function() {
                const item = $(this).closest('.laoli-cart-item');
                const id = item.attr('data-id');
                const quantity =  Number(item.find('.js-cart-quantity').text()) + 1;

                let formData = {
                  'id': id,
                  'quantity': quantity,
                };

                fetch(window.Shopify.routes.root + 'cart/change.js', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                .then(response => {
                  return response.json();
                })
                .then(result => {
                    console.log('result', result)
                    item.find('.js-cart-quantity').text(quantity);
                    totalPrice.text(currency + ' ' + getPrice(result.total_price));

                    if (result.item_count > 0) {
                        cartCount.text(' (' + result.item_count + ')');
                    } else {
                        content.css('display', 'none');
                        empty.show();
                        cartCount.text('');
                    }
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            })

            itemsWrapper.find('.js-cart-minus').click(function() {
                const item = $(this).closest('.laoli-cart-item');
                const id = item.attr('data-id');
                const quantity =  Number(item.find('.js-cart-quantity').text()) - 1;

                let formData = {
                  'id': id,
                  'quantity': quantity,
                };

                fetch(window.Shopify.routes.root + 'cart/change.js', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                .then(response => {
                  return response.json();
                })
                .then(result => {
                    if (quantity > 0) {
                        item.find('.js-cart-quantity').text(quantity);
                    } else {
                        item.remove();
                    }

                    totalPrice.text(currency + ' ' + getPrice(result.total_price));

                    if (result.item_count > 0) {
                        cartCount.text(' (' + result.item_count + ')');
                    } else {
                        content.css('display', 'none');
                        empty.show();
                        cartCount.text('');
                    }
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            })


        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    const showCart = function() {
        cart.addClass('open');

        getCart();

        setTimeout(function() {
            $(document).on('click.menu',function(e) {
                const target = $(e.target);

                if (!target.closest('.laoli-cart').length) {
                    hideCart();
                }
            })
        }, 500);
    }

    cartCheckout.click(function() {
        let url = '/cart/';
        const products = itemsWrapper.find('.laoli-cart-item');

        products.each(function(index) {
            const itemId = $(this).attr('data-id');
            const itemQuantity = $(this).find('.js-cart-quantity').text();

            url = url + itemId + ':' + itemQuantity + ','
        });

        window.location.replace(url);

    });

    const hideCart = function() {
        cart.removeClass('open');
        content.css('display', 'none');
        empty.hide();
        loading.show();
        $(document).off('click.menu');
    }

    closeButton.click(function() {
        hideCart();
    })

    showCart();

}


