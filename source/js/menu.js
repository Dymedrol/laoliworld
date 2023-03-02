export const initMenu = () => {


    function is_touch_enabled() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 );
    }

    const menu = $('.laoli-menu')
    const menuInner = $('.laoli-menu-inner')

    if (!menu.length) {
        return
    }

    const burger = $('.js-menu-burger');
    const close = $('.js-menu-close')

    burger.click(function() {
        menu.addClass('open');
    })

    close.click(function() {
        menu.removeClass('open');
    });
}


