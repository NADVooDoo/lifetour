import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {Burger} from './modules/burger/burger';
import {getHeroSlider} from './modules/hero/init-hero-swiper';
import {getHeight} from './modules/hero/get-height';
import {getToursSlider} from './modules/init-tours-swiper';
import {isMobileDevice} from './utils/is-mobile-device';
import {getCoachingSlider} from './modules/init-coaching-swiper';
import {getReviewsSlider} from './modules/init-reviews-swiper';
import {getAdvantagesSlider} from './modules/init-advantages-swiper';
import {getGallerySlider} from './modules/init-gallery-swiper';
import {getMap} from './modules/map/init-map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  isMobileDevice();
  getHeight();
  const burger = new Burger();
  burger.init();
  getHeroSlider();
  getReviewsSlider();
  getAdvantagesSlider();
  getGallerySlider();
  getMap();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    getToursSlider();
    getCoachingSlider();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
