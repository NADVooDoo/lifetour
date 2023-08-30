import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getCoachingSlider = () => {
  if (document.querySelector('[data-coaching-slider]')) {
    return new Swiper('[data-coaching-slider]', {
      direction: 'horizontal',
      allowTouchMove: isMobileDevice(),
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '[data-coaching-next]',
        prevEl: '[data-coaching-prev]',
      },
    });
  }
  return null;
};

export {getCoachingSlider};
