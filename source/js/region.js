export const initRegions = () => {
    const regionButtons = $('.js-region');

    if (!regionButtons.length) {
        return
    }

    const regionPopup = $('.laoli-region');
    const closeButton = $('.js-region-close');
    const firstStep = $('.laoli-region-first');
    const secondStep = $('.laoli-region-second');
    const changeButton = $('.laoli-region-change')
    const selector = $('.laoli-region-selector-inner');
    const items = $('.laoli-region-selector-item');
    const input = $('.js-region-input');

    const closePopup = function() {
        regionPopup.hide();
        firstStep.show();
        secondStep.hide();
    }

    regionButtons.click(function() {
        regionPopup.show();
        $('.laoli-menu').removeClass('open');
    });

    closeButton.click(function() {
        closePopup();
    });

    changeButton.click(function() {
        firstStep.hide();
        secondStep.show();
    });

    selector.click(function(e) {
        const target = $(e.target);

        if (target.hasClass('laoli-region-selector-item')) {
            items.removeClass('laoli-region-selector-item-active');
            target.addClass('laoli-region-selector-item-active');
            input.val(target.attr('data-value'));
        }
    });

}


