import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getReviewsSlider = () => {
  if (document.querySelector('.reviews__slider')) {
    return new Swiper('.reviews__slider', {
      direction: 'horizontal',
      allowTouchMove: isMobileDevice(),
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    });
  }
  return null;
};

export {getReviewsSlider};
