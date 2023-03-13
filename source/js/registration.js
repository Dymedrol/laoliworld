export const initRegistration = () => {
    const registration = $('.laoli-registration');
    const list_id = 'SdcCiU';

    if (!registration.length) {
        return
    }

    const buttons = $('.js-show-subscription');
    const closeButton = registration.find('.laoli-registration-close');
    const form = registration.find('form');


    buttons.click(function() {
        registration.addClass('open');
    })

    closeButton.click(function() {
        registration.removeClass('open');
    });

    form.submit(function(e) {
        e.preventDefault();

        const name = form.find('.laoli-registration-input-name').val();
        const email = form.find('.laoli-registration-input-email').val();

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
          },
          "data": {
            "g": list_id,
            "$fields": "$first_name",
            "email": email,
            "$first_name": name,
          }
        }

        $.ajax(settings).done(function (response) {
          if (response.success) {
            form.hide();
            registration.find('.laoli-registration-form-success').show();
          }
        });
    });

}


