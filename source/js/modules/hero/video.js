const initVideo = () => {
  if (document.querySelector('[data-video]')) {
    const video = document.querySelector('[data-video]');
    const button = document.querySelector('[data-control]');
    const iframe = `
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${button.dataset.src}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

    button.addEventListener('click', () => {
      video.innerHTML = iframe;
    }, {once: true});
  }
};

export {initVideo};
