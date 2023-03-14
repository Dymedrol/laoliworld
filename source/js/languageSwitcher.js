export const initLanguageSwitcher = () => {
    let language_switcher_class_name = 'language_switcher';

    function tumblerClickHandler(e) {
      let language = e.target.dataset.language;
      let form = e.target.parentNode;
      let language_input = form.querySelector('input[name="language_code"]');

      language_input.value = language;
      form.submit();
    }

    let tumblers = document.getElementsByClassName(language_switcher_class_name);

    for (let i = 0; i < tumblers.length; i++) {
      tumblers[i].addEventListener('click', tumblerClickHandler);
    }
}


