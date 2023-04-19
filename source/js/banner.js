export const initBanner = () => {
    const banner = $('.laoli-banner');

    if (!banner.length) {
        return
    }

    const pdp = $('.laoli-pdp-desktop');

    if (pdp.length) {
        pdp.addClass('laoli-pdp-with-banner');
    }


    const closeButton = banner.find('.laoli-banner-close');

    closeButton.click(function() {
        banner.remove();
        pdp.removeClass('laoli-pdp-with-banner');
    });
}


