import Swiper from '../../vendor/swiper';
import {isMobileDevice} from '../../utils/is-mobile-device';
import {initVideo} from '../../modules/hero/video';
import {initAudio} from '../../modules/hero/audio';

const getHeroSlider = () => {
  const sliderElement = document.querySelector('[data-hero-slider]');
  if (!sliderElement) {
    return null;
  }

  const youtubePlayer = initVideo(sliderElement.querySelector('[data-video]'));
  initAudio();

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
    watchSlidesProgress: true,
    on: {
      slideChange() {
        youtubePlayer.pause();
      },
    },
  });

  return slider;
};

export {getHeroSlider};
