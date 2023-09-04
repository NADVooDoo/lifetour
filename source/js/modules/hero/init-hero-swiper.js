import Swiper from '../../vendor/swiper';
import {isMobileDevice} from '../../utils/is-mobile-device';

const getHeroSlider = () => {
  const sliderElement = document.querySelector('[data-hero-slider]');

  const createSlider = () => {
    return new Swiper(sliderElement, {
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
      on: {
        init() {
          pauseMediaOnSlide(this);
        },
        slideChange() {
          pauseMediaOnSlide(this);
        },
      },
    });
  };

  const pauseMediaOnSlide = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const mediaElements = activeSlide.querySelectorAll('video, audio');

    mediaElements.forEach((media) => {
      media.play();
    });
  };

  if (sliderElement) {
    return createSlider();
  }

  return null;
};

export {getHeroSlider};
