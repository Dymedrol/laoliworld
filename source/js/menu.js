export const initMenu = () => {

    const menu = $('.laoli-menu')

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


