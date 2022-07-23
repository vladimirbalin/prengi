import "../scss/main.scss";
import { sliderFirstPage } from './slider';
import { tabs } from './tabs';
import {hamburger} from "./hamburger";
import {modal} from "./modal";

window.addEventListener('DOMContentLoaded', function(){
  sliderFirstPage();
  tabs();
  hamburger();
  modal();
})