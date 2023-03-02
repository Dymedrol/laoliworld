export const initPdp = () => {
    const pdpWrapper = $('.laoli-pdp');

    if (!pdpWrapper.length) {
        return
    }

    const gallery = $('.laoli-pdp-gallery');
    const galleryWrapper = gallery.find('.laoli-pdp-gallery-wrapper');
    const back = $('.laoli-pdp-desktop-back')

    const detailsButton = $('.js-details-button');
    const detailsWrapper = $('.js-details-wrapper')
    const careButton = $('.js-care-button')
    const careWrapper = $('.js-care-wrapper')

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
      items: 1,
    });

    $('.laoli-pdp-mobile-carouse').owlCarouselProgressBar({
        size: '4px',
        transitionInterval: .3,
        progressBarClassName: 'laoli-pdp-mobile-carousel-control',
        scrollerClassName: 'laoli-pdp-mobile-carousel-control-indicator'
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
        console.log(targetPic, offset)

        if (index == 1) {
            offset = 0;
        }

        galleryWrapper.animate({
          scrollTop: offset
        }, 0);

        gallery.click(function() {
            hideGallery();
        });




    });

}


