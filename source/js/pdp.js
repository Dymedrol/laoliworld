import { openCart } from './cart';

export const initPdp = () => {
    const pdpWrapper = $('.laoli-pdp');

    if (!pdpWrapper.length) {
        return
    }

    const cartCount = $('.js-cart-count');

    const gallery = $('.laoli-pdp-gallery');
    const galleryWrapper = gallery.find('.laoli-pdp-gallery-wrapper');
    const back = $('.laoli-pdp-desktop-back')

    const detailsButton = $('.js-details-button');
    const detailsWrapper = $('.js-details-wrapper')
    const careButton = $('.js-care-button')
    const careWrapper = $('.js-care-wrapper')

    const forms = $('.js-cart-form');

    detailsButton.click(function() {
        detailsButton.addClass('controls-item-active');
        careButton.removeClass('controls-item-active');
        detailsWrapper.show();
        careWrapper.hide();
    });

    careButton.click(function() {
        detailsButton.removeClass('controls-item-active');
        careButton.addClass('controls-item-active');
        detailsWrapper.hide();
        careWrapper.show();
    });

    $(".laoli-pdp-mobile-carousel").owlCarousel({
        margin: 15,
        autoWidth: true,
        dots: true,
        center: true,
        smartSpeed: 500,
        animateIn: 'ease-out',
        animateOut: 'ease-out',
    });

    const showGallery = function() {
        gallery.fadeIn(200);
    }

    const hideGallery = function() {
        galleryWrapper.animate({
          scrollTop: 0
        }, 0);
        gallery.fadeOut(200);
    }

    $('.laoli-pdp-desktop-pic').click(function() {
        showGallery();

        const index = $(this).attr('data-index');

        const attr = "picture[data-index=" + index + "]";
        const targetPic = gallery.find(attr);
        let offset = targetPic.position().top;

        if (index == 1) {
            offset = 0;
        }

        galleryWrapper.animate({
          scrollTop: offset
        }, 0);


        gallery.click(function(e) {
            const target = $(e.target);
            if (!target.closest('form').length) {
                hideGallery();
            }
        });
    });

    forms.submit(function(e) {
        e.preventDefault();
        const form  = $(this);
        const productId = form.find('input[name="id"]').val();

        let formData = {
         'items': [{
          'id': productId,
          'quantity': 1
          }]
        };

        fetch(window.Shopify.routes.root + 'cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 200) {

                let cartCountText = cartCount.first().text();
                if (cartCountText) {
                    cartCountText = cartCountText.replace(/\s/g, '');
                    cartCountText = cartCountText.replace(/[{()}]/g, '');
                    cartCount.text(' (' + (Number(cartCountText) + 1) + ')');
                } else {
                    cartCount.text(' (1)');
                }

                openCart();
            }

          return response.json();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })

}


