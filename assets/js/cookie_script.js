const container = document.querySelector('.container');
const sound = document.getElementById('click-sound');
const sound2 = document.getElementById('sound2'); // added line

function mouse_evt_handler(event) {
    cursor.style.left = String(event.clientX - 31) + "px";
    cursor.style.top = String(event.clientY - 4) + "px";

    let flag = false;
    document.querySelectorAll(".popcorn_container").forEach(element => {
        var rect = element.getBoundingClientRect();
        let x = rect.left + ((rect.right - rect.left) / 2);
        let y = rect.top + ((rect.bottom - rect.top) / 2);

        let x_differance = Math.abs(event.clientX - x);
        let y_differance = Math.abs(event.clientY - y);

        let distance = Math.sqrt(x_differance**2 + y_differance**2);
        if (distance <= ((rect.right - rect.left) * 0.6)) {
            flag = true;
        }
    });
    if (!flag) {
        cursor_image.src = "assets/media/cursor_centered.png"
    } else {
        cursor_image.src = "assets/media/pointer_centered.png"
    }
}

document.onmousemove = mouse_evt_handler;

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
