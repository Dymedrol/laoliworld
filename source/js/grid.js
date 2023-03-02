export const initGrid = () => {
    const filters = $('.laoli-grid-controls-filters');

    if (!filters.length) {
        return
    }

    const items = $('.laoli-grid-items');

    $(".laoli-grid-controls-list_mobile").owlCarousel({
        margin: 35,
        autoWidth: true,
        dots: false,
        nav: false,
    });

    const inStockFilter = filters.find('#filter-in-stock');
    const madeToOrderFilter = filters.find('#filter-made-to-order');

    const inStock = items.find('.in-stock');
    const madeToOrder = items.find('.made-to-order');

    const active = 'laoli-grid-controls-filters-filter_active';


    inStockFilter.click(function() {

        if (!inStockFilter.hasClass(active)) {
            if (madeToOrderFilter.hasClass(active)) {
                madeToOrderFilter.removeClass(active)
                inStock.show()
                inStockFilter.addClass(active)
                madeToOrder.hide()
            } else {
                inStockFilter.addClass(active)
                madeToOrder.hide()
            }
        } else {
            inStockFilter.removeClass(active)
            madeToOrder.show()
        }
    });

    madeToOrderFilter.click(function() {
        if (!madeToOrderFilter.hasClass(active)) {
            if (inStockFilter.hasClass(active)) {
                inStockFilter.removeClass(active)
                inStock.hide()
                madeToOrderFilter.addClass(active)
                madeToOrder.show()
            } else {
            madeToOrderFilter.addClass(active)
            inStock.hide()
            }
        } else {
            madeToOrderFilter.removeClass(active)
            inStock.show()
        }
    });
}


