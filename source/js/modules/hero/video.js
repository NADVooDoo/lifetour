import {loadScript} from '../../utils/load-script.js';

const initVideo = () => {
  const video = document.querySelector('[data-video]');
  if (video) {
    const player = video.querySelector('[data-player]');
    const button = video.querySelector('[data-control]');

    loadScript('https://youtube.com/player_api', () => {
      window.onYouTubePlayerAPIReady = () => {
        const youtubePlayer = new window.YT.Player(player, {
          width: '100%',
          height: '100%',
          events: {
            onStateChange(event) {
              if (event.data === 0) {
                video.classList.remove('is-active');
              }
            },
          },
          videoId: button.dataset.src,
        });

        button.addEventListener('click', () => {
          video.classList.add('is-active');
          youtubePlayer.playVideo();
        });
      };
    });
  }
};

export {initVideo};
