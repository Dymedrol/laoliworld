export const initPdpSelect = () => {
    const pdpWrapper = $('.laoli-pdp');

    if (!pdpWrapper.length) {
        return
    }

    const selects = $('.laoli-pdp-mobile-info-buttons-sizes')

    selects.click(function() {
        const select = $(this).closest('.laoli-pdp-mobile-info-buttons-sizes-wrapper');
        const menu = select.find('.laoli-pdp-mobile-info-buttons-sizes-menu');
        const selectedValue = select.find('.laoli-pdp-mobile-info-buttons-sizes-value');
        const input = select.find('input');

        menu.toggle();

        menu.click(function(e) {
            if ($(event.target).hasClass("laoli-pdp-mobile-info-buttons-sizes-menu-item")) {
                selectedValue.text($(event.target).text());
                input.val($(event.target).text());
                menu.hide();
            }
        });
    });
}


