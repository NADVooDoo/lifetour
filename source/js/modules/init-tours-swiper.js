import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getToursSlider = () => {
  if (document.querySelector('.tours__slider')) {
    return new Swiper('.tours__slider', {
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
        nextEl: '.tours__next',
        prevEl: '.tours__prev',
      },
    });
  }
  return null;
};

export {getToursSlider};
