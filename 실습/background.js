const body = document.querySelector("body");

function background() {
    const image = new Image();
    let random = Math.ceil(Math.random()*3);
    console.log(random);
    image.src = `../images/${random}.jpg`;
    image.classList.add("background");
    body.appendChild(image);
}

function init() {
    background();
}

init();