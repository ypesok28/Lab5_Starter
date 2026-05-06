// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const level = Number(volumeSlider.value);
    audio.volume = level / 100;
    volumeIcon.src = `assets/icons/volume-level-${volumeIconLevel(level)}.svg`;
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

function volumeIconLevel(volume) {
  if (volume === 0) return 0;
  if (volume < 33) return 1;
  if (volume < 67) return 2;
  return 3;
}
