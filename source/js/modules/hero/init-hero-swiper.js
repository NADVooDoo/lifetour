import Swiper from '../../vendor/swiper';
import {isMobileDevice} from '../../utils/is-mobile-device';

const getHeroSlider = () => {
  const sliderElement = document.querySelector('[data-hero-slider]');
  if (!sliderElement) {
    return null;
  }

  const listElement = sliderElement.querySelector('[data-hero-list]');

  const slider = new Swiper(sliderElement, {
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

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || event.ctrlKey || event.altKey) {
      return;
    }
    setTimeout(() => {
      const slideElement = document.activeElement.closest('[data-hero-slide]');
      if (!slideElement) {
        return;
      }

      const {left} = slideElement.getBoundingClientRect();
      if (left) {
        const index = parseInt(slideElement.dataset.heroSlide, 10);
        slider.slideTo(index);

        const [, currentTransform] = getComputedStyle(listElement).transform.match(/([-\d]+?),\s0\)$/);
        listElement.style.transform = `translate3d(${parseInt(currentTransform, 10) - left}px, 0, 0)`;
      }
    }, 33);
  });

  return slider;
};

export {getHeroSlider};
