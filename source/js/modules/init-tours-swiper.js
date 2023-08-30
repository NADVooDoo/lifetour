import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getToursSlider = () => {
  if (document.querySelector('[data-tours-slider]')) {
    return new Swiper('[data-tours-slider]', {
      allowTouchMove: isMobileDevice(),
      direction: 'horizontal',
      breakpoints: {
        0: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 100,
        },
        768: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1280: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '[data-tours-next]',
        prevEl: '[data-tours-prev]',
      },
    });
  }
  return null;
};

export {getToursSlider};
