export const initPdp = () => {
    const pdpWrapper = $('.laoli-pdp');

    if (!pdpWrapper.length) {
        return
    }

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

    $('.owl-carousel').owlCarouselProgressBar({
        size: '4px',
        transitionInterval: .3,
        progressBarClassName: 'laoli-pdp-mobile-carousel-control',
        scrollerClassName: 'laoli-pdp-mobile-carousel-control-indicator'
    });

}


