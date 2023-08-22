import Swiper from '../../vendor/swiper';

const getHeroSlider = () => {
  const sliderElement = document.querySelector('.hero__slider');
  if (sliderElement) {
    return new Swiper(sliderElement, {
      direction: 'horizontal',
      speed: 300,
      breakpoints: {
        768: {
          allowTouchMove: false,
        },
      },
      pagination: {
        el: '.hero__pagination',
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
