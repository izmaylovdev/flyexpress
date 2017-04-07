import navInit from './modules/nav';
import dataInputInit from './modules/data_input';
import tabsInit from './modules/tabs';
import popupInit from './modules/popup';

navInit();
dataInputInit();
tabsInit();
popupInit();

$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: false,
    navText: ['<i></i>','<i></i>']
});
