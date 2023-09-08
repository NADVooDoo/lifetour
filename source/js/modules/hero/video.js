import {loadScript} from '../../utils/load-script.js';

const initVideo = (video) => {
  let youtubePlayer = null;

  if (video) {
    const player = video.querySelector('[data-player]');
    const button = video.querySelector('[data-control]');

    loadScript('https://youtube.com/player_api', () => {
      window.onYouTubePlayerAPIReady = () => {
        youtubePlayer = new window.YT.Player(player, {
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

        let interval = null;
        const checkPlayer = () => {
          if (typeof youtubePlayer.playVideo === 'function') {
            clearInterval(interval);
            youtubePlayer.playVideo();
          }
        };

        button.addEventListener('click', () => {
          video.classList.add('is-active');
          interval = setInterval(checkPlayer, 100);
        });
      };
    });
  }

  return {
    pause() {
      if (youtubePlayer) {
        youtubePlayer.pauseVideo();
      }
    },
  };
};

export {initVideo};
