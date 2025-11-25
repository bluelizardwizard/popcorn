const clickSound = document.getElementById('clickSound');

function popcorn_listener(e) {
  console.log(e.target.childNodes[0])

  const pop_container = e.target
  const kernel = pop_container.childNodes[1]
  const popcorn = pop_container.childNodes[3]
  const detail = pop_container.childNodes[5]

  console.log(pop_container.value);

  // Sound abspielen
  if (kernel.style.display != "none") {
   clickSound.currentTime = 0; // springt an den Anfang, falls mehrfach geklickt
  clickSound.play(); 
  }

  kernel.style.display = kernel.style.display === "none" ? "flex" : "none"
  popcorn.style.display = kernel.style.display === "none" ? "flex" : "none"
  detail.style.display = kernel.style.display === "none" ? "flex" : "none"
}

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

for (let i = 0; i < 1; i++) {
  // var element = create('<div id="popcorn_container_id" style="background-color: blue;" class="popcorn_container"><div id="kernel_id" class="kernel" style="display: none;"></div><div id="popcorn_id" class="popcorn"></div><div id="detail_id" class="detail"></div></div>')
  var element = document.getElementById("popcorn_container_id")
  element.addEventListener("click", popcorn_listener)
  document.body.insertBefore(element, document.body.childNodes[0])
}
