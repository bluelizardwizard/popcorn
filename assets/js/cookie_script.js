const container = document.querySelector('.container');
const sound = document.getElementById('click-sound');
const sound2 = document.getElementById('sound2'); // added line

container.addEventListener('click', () => {
  if (!container.classList.contains('open')) {
    container.classList.add('open');
    sound.currentTime = 0;
    sound.play();
    sound.onended = () => {                     // added line
      sound2.currentTime = 0;                   // added line
      sound2.play();                            // added line
    };                                          // added line
  } else {
    container.classList.remove('open');
  }
});
