import { initMenu } from './menu';
import { initGrid } from './grid';
import { initPdp } from './pdp';
import { initPdpSelect } from './pdp-select';

$(document).ready(function(){
  initMenu();
  initGrid();
  initPdp();
  initPdpSelect();
})


