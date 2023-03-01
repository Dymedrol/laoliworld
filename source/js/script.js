import { initMenu } from './menu';
import { initGrid } from './grid';
import { initPdp } from './pdp';
import { initPdpSelect } from './pdp-select';
import { initBanner } from './banner';
import { initRegistration } from './registration';

$(document).ready(function(){
  initMenu();
  initGrid();
  initPdp();
  initPdpSelect();
  initBanner();
  initRegistration();
})


