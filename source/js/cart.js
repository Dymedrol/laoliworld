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


    const getPrice = function(price) {
        const updatedPrice = parseInt(price / 100) + "." + (price % 100)
        return updatedPrice
    }


    const cartItem = (item) => `
    <div class="laoli-cart-item" data-id="${item.id}" data-handle="${item.handle}">
        <div class="laoli-cart-item-pic-wrapper">
            <div class="laoli-cart-item-pic-lavel hidden">made to order</div>
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

            // let variants = []

            // fetch(window.Shopify.routes.root + 'products.json', {
            //   method: 'get',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            // })
            // .then(response => response.json())
            // .then(result => {
            //     console.log(result)
            //     result.products.forEach(function(item) {
            //         variants = [...variants, item.variants]
            //     })
            //     console.log(variants.flat(Infinity))
            // })
            // .catch((error) => {
            //   console.error('Error:', error);
            // });

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

                const url = 'products/' + item.handle + '.js'

                fetch(window.Shopify.routes.root + url, {
                  method: 'get',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                })
                .catch((error) => {
                  console.error('Error:', error);
                });

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

                    console.log(result)

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
        if ($(window).width() < 720) {
            cart.show();
        } else {
            cart.show("slow");
        }

        getCart();
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
        cart.hide();
        content.css('display', 'none');
        empty.hide();
        loading.show();
    }

    closeButton.click(function() {
        hideCart();
    })

    showCart();

}


