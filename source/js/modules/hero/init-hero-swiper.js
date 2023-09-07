import Swiper from '../../vendor/swiper';
import {isMobileDevice} from '../../utils/is-mobile-device';

const getHeroSlider = () => {
  const sliderElement = document.querySelector('[data-hero-slider]');
  if (sliderElement) {
    return new Swiper(sliderElement, {
      loop: true,
      allowTouchMove: isMobileDevice(),
      direction: 'horizontal',
      speed: 300,
      pagination: {
        el: '[data-hero-pagination]',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="hero__pagination-button ${className}" type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
        },
      },
    });
  }
  return null;
};

export {getHeroSlider};
