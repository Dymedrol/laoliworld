import { initMenu } from './menu';
import { initGrid } from './grid';
import { initPdp } from './pdp';
import { initPdpSelect } from './pdp-select';
import { initBanner } from './banner';
import { initRegistration } from './registration';
import { initLanguageSwitcher } from './languageSwitcher';
import { initFaq } from './faq';

$(document).ready(function(){
  initMenu();
  initGrid();
  initPdp();
  initPdpSelect();
  initBanner();
  initRegistration();
  initLanguageSwitcher();
  initFaq();
})


