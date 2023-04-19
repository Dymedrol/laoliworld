export const initPdpSelect = () => {
    const pdpWrapper = $('.laoli-pdp');

    if (!pdpWrapper.length) {
        return
    }

    const selects = $('.laoli-pdp-mobile-info-buttons-sizes');

    const status = $('.js-status');
    const addButton = $('.js-add');

    const inStockText = pdpWrapper.attr('data-inStockText');
    const madeToOrderText = pdpWrapper.attr('data-madeToOrderText');
    const addToCartText = pdpWrapper.attr('data-addToCartText');
    const preOrderText = pdpWrapper.attr('data-preOrderText');



    selects.click(function() {
        const select = $(this).closest('.laoli-pdp-mobile-info-buttons-sizes-wrapper');
        const menu = select.find('.laoli-pdp-mobile-info-buttons-sizes-menu');
        const selectedValue = select.find('.laoli-pdp-mobile-info-buttons-sizes-value');
        const input = select.find('input');

        menu.toggle();

        menu.click(function(event) {
            const target = $(event.target);

            if (target.hasClass("laoli-pdp-mobile-info-buttons-sizes-menu-item")) {
                if (target.hasClass('laoli-pdp-mobile-info-buttons-sizes-menu-item_empty')) {
                    status.text(madeToOrderText);
                    addButton.val(addToCartText);
                } else {
                    status.text(inStockText);
                    addButton.val(addToCartText);
                }

                selectedValue.text($(event.target).text());
                input.val($(event.target).attr('data-id'));
                menu.hide();
            }
        });
    });
}


