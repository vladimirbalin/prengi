import "../scss/main.scss";
import { sliderFirstPage } from './slider';
import { tabs } from './tabs';
import {hamburger} from "./hamburger";
import {modal} from "./modal";
import {navbar} from "./navbar";
import {goToTopButton} from "./go-to-top-button";

window.addEventListener('DOMContentLoaded', function(){
  sliderFirstPage();
  tabs();
  hamburger();
  modal();
  navbar();
  goToTopButton();
})