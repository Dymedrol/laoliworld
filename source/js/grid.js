export const initGrid = () => {
    const filters = $('.laoli-grid-controls-filters');

    if (!filters.length) {
        return
    }

    const inStockFilter = filters.find('#filter-in-stock');
    const madeToOrderFilter = filters.find('#filter-made-to-order');
    const inStock = $('#in-stock');
    const madeToOrder = $('#made-to-order');


    inStockFilter.click(function() {
        inStock.css('display', 'flex');
        madeToOrder.css('display', 'none');
        inStockFilter.addClass('laoli-grid-controls-filters-filter_active');
        madeToOrderFilter.removeClass('laoli-grid-controls-filters-filter_active')
    });

    madeToOrderFilter.click(function() {
        inStock.css('display', 'none');
        madeToOrder.css('display', 'flex');
        madeToOrderFilter.addClass('laoli-grid-controls-filters-filter_active');
        inStockFilter.removeClass('laoli-grid-controls-filters-filter_active');
    });
}


