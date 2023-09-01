import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getReviewsSlider = () => {
  if (document.querySelector('[data-reviews-slider]')) {
    return new Swiper('[data-reviews-slider]', {
      direction: 'horizontal',
      allowTouchMove: isMobileDevice(),
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '[data-reviews-next]',
        prevEl: '[data-reviews-prev]',
      },
    });
  }
  return null;
};

export {getReviewsSlider};
