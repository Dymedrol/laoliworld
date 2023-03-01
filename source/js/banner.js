export const initBanner = () => {
    const banner = $('.laoli-banner');

    if (!banner.length) {
        return
    }

    const closeButton = banner.find('.laoli-banner-close');

    closeButton.click(function() {
        banner.remove();
    });
}


