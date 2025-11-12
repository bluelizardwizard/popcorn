const shape = document.getElementById('shape');
const clickSound = document.getElementById('clickSound');

shape.addEventListener('click', () => {
  // Sound abspielen
  clickSound.currentTime = 0; // springt an den Anfang, falls mehrfach geklickt
  if (shape.classList.contains("kernel")) {
    clickSound.play();
    should_pop_flag = false;
  }

  // Form umschalten
  shape.classList.toggle('kernel');
  shape.classList.toggle('popcorn');
});
