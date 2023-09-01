import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const createSlider = () => {
  if (document.querySelector('[data-advantages-slider]')) {
    return new Swiper('[data-advantages-slider]', {
      direction: 'horizontal',
      allowTouchMove: isMobileDevice(),
      loop: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '[data-advantages-next]',
        prevEl: '[data-advantages-prev]',
      },
    });
  }
  return null;
};

const getAdvantagesSlider = () => {
  let swiper = null;

  const isValid = () => {
    const desktopWidth = window.matchMedia('(min-width: 1200px)');
    return desktopWidth.matches;
  };

  if (isValid()) {
    swiper = createSlider();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      if (!swiper) {
        swiper = createSlider();
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  });
};

export {getAdvantagesSlider};
