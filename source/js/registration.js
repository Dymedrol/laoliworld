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
        registration.show();
    })

    closeButton.click(function() {
        registration.hide();
    });

    form.submit(function(e) {
        e.preventDefault();

        const name = form.find('.laoli-registration-input-name');
        const email = form.find('.laoli-registration-input-email');

        const options = {
          method: 'POST',
          headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({profiles: [{email: 'kyle@smp.com', name: 'sssss'}]})
        };

        fetch('https://a.klaviyo.com/api/v2/list/SdcCiU/subscribe?api_key=ShtSDp', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));

        // var settings = {
        //   "async": true,
        //   "crossDomain": true,
        //   "url": "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
        //   "method": "POST",
        //   "headers": {
        //     "content-type": "application/x-www-form-urlencoded",
        //     "cache-control": "no-cache"
        //   },
        //   "data": {
        //     "g": list_id,
        //     "$fields": "$first_name",
        //     "email": "ddd@ddd.com",
        //     "$first_name": "name name",
        //   }
        // }

        // $.ajax(settings).done(function (response) {
        //   if (response.success) {
        //     form.hide();
        //     registration.find('.laoli-registration-form-success').show();
        //   }
        // });
    });






}


