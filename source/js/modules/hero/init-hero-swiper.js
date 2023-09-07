import Swiper from '../../vendor/swiper';
import {isMobileDevice} from '../../utils/is-mobile-device';

const getHeroSlider = () => {
  const sliderElement = document.querySelector('[data-hero-slider]');
  if (!sliderElement) {
    return null;
  }

  return new Swiper(sliderElement, {
    loop: true,
    breakpoints: {
      768: {
        loop: false,
      },
    },
    allowTouchMove: isMobileDevice(),
    speed: 300,
    pagination: {
      el: '[data-hero-pagination]',
      clickable: true,
      renderBullet: (index, className) => {
        return `<button class="hero__pagination-button ${className}" type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
      },
    },
  });
};

export {getHeroSlider};
