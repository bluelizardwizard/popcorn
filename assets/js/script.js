// Dieses Skript sorgt dafür, dass bei allen Elementen mit der Klasse
// "popcorn_container" beim Klicken die Klasse "zu" umgeschaltet wird.
// Ist "zu" noch nicht vorhanden → hinzufügen.
// Ist "zu" bereits vorhanden → entfernen.

document.querySelectorAll(".popcorn_container").forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("zu");
    });
});
// Dieses Skript registriert Klick-Events für alle Elemente mit der Klasse "zu".
// Beim Klicken wird geprüft, ob die Klasse "zu" *immer noch* vorhanden ist.
// Nur wenn sie vorhanden ist, wird der Sound abgespielt.

const pop_up_div = document.getElementById("pop_up");

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
    var rect = pop_up.getBoundingClientRect();
    let x = rect.left + ((rect.right - rect.left) / 2);
    let y = rect.top + ((rect.bottom - rect.top) / 2);

    let x_differance = Math.abs(event.clientX - x);
    let y_differance = Math.abs(event.clientY - y);

    let distance = Math.sqrt(x_differance**2 + y_differance**2);
    if (distance <= ((rect.right - rect.left) * 0.4)) {
        flag = true;
    }
    if (!flag) {
        cursor_image.src = "assets/media/cursor_centered.png"
    } else {
        cursor_image.src = "assets/media/pointer_centered.png"
    }
}

document.onmousemove = mouse_evt_handler;

let special_index = Math.floor(Math.random() * 17); // Chane to number of popcorns here
let i = 0;
document.querySelectorAll(".zu").forEach((el) => {
    if (i == special_index) {
        // Add class to mark as special
        console.log(i + " is special");
        el.classList.add("special");
    }
    i = i+1;
    el.addEventListener("click", () => {
        if (!el.classList.contains("zu")) {
            let audio = new Audio("assets/media/popcorn.mp3");
            switch (parseInt(el.getAttribute('value'), 10)) {
                case 1:
                    audio = new Audio("assets/media/popcorn_deep.mp3");
                    break;
                case 2:
                    audio = new Audio("assets/media/Popcorn_deepest.mp3");
                    break;
                default:
                    
            }
            if (el.classList.contains("special")) {
                pop_up_div.style.display = "flex";
                const special_sound = new Audio("assets/media/banner_sound.mp3");
                special_sound.play();
            }
            audio.play();
        }
    });
});
