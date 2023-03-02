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
    })

    $(document).click(function(e) {
        const target = $(e.target);

        if (!target.closest('.laoli-menu').length) {
            menu.hasClass('open') ? menu.removeClass('open') : null;
        }
    })

    close.click(function() {
        menu.removeClass('open');
    });
}


