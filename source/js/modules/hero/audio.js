const initAudio = (audio) => {
  let iframe = '';

  if (audio) {
    const button = audio.querySelector('[data-audio-control]');
    iframe = `
    <iframe frameborder="0" style="border:none;width:340px;height:220px;" width="340" height="220" src="${button.dataset.src}">Слушайте <a href='${button.dataset.src}'>Про код</a> на Яндекс Музыке</iframe>
  `;

    button.addEventListener('click', () => {
      audio.classList.add('audio--play');
      audio.innerHTML = iframe;
    }, {once: true});
  }

  return {
    pause() {
      if (audio && iframe) {
        audio.innerHTML = '';
        audio.innerHTML = iframe;
      }
    },
  };
};

export {initAudio};
