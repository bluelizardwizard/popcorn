const shape = document.getElementById('shape');
const clickSound = document.getElementById('clickSound');

let should_pop_flag = true;

shape.addEventListener('click', () => {
  // Sound abspielen
  clickSound.currentTime = 0; // springt an den Anfang, falls mehrfach geklickt
  if (should_pop_flag) {
    clickSound.play();
    should_pop_flag = false;
  } else {
    should_pop_flag = true;
  }

  // Form umschalten
  shape.classList.toggle('kernel');
  shape.classList.toggle('popcorn');
});
