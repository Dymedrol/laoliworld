export const initMenu = () => {

    const menu = $('.laoli-menu')
    const menuInner = $('.laoli-menu-inner')

    if (!menu.length) {
        return
    }

    const burger = $('.js-menu-burger');
    const close = $('.js-menu-close')

    burger.click(function() {
        menu.addClass('open');
        menuInner.focus();
    })

    close.click(function() {
        menu.removeClass('open');
    });

    menuInner.on('blur',function() {
        menu.removeClass('open');
    });
}


