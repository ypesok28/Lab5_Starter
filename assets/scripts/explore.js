// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore > img');
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const synth = window.speechSynthesis;

  function populateVoices() {
    const voices = synth.getVoices();
    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoices();
  synth.addEventListener('voiceschanged', populateVoices);

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    if (selectedName) {
      utterance.voice = synth.getVoices().find((v) => v.name === selectedName);
    }
    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });
    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });
    synth.speak(utterance);
  });
}
