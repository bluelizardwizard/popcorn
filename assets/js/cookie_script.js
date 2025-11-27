const container = document.querySelector('.container');
const sound = document.getElementById('click-sound');
const sound2 = document.getElementById('sound2'); // added line

container.addEventListener('click', () => {
  if (!container.classList.contains('open')) {

    const cookie_span = document.getElementById("cookie_text");
    const text_options = ["your finances will be a key to your financial future", "good luck is in your future", "gönn dir heute pottkieker", "you deserve a coffee break", "you look good today :)", "Hard work pays off in the future. Laziness pays off now"];
    let random_index = Math.floor(Math.random() * text_options.length);
    cookie_span.textContent = text_options[random_index];

    const bg_image = document.getElementById("bg_image");
    bg_image.style.display = "flex";

    container.classList.add('open');
    sound.currentTime = 0;
    sound.play();
    sound.onended = () => {                     // added line
      sound2.currentTime = 0;                   // added line
      sound2.play();                            // added line
    };                                          // added line
  } /*else {
    container.classList.remove('open');
  }*/
});
