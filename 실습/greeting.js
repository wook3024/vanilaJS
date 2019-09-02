const greetingForm = document.querySelector(".js-greeting");
const greetingInput = greetingForm.querySelector("input"); 
const paintUser = document.querySelector("h4");

const GREETING = "currentUser";

function paintGreeting(text) {
    paintUser.innerText = text;
}

function submit(event) {
    event.preventDefault();
    const text = greetingInput.value;
    localStorage.setItem(GREETING, text);
    greetingForm.classList.add("shadow");
    paintGreeting(text);
    greetingInput.value = "";
}

function init() {
    const getGreeting = localStorage.getItem(GREETING);
    if(getGreeting == null) {
        greetingForm.addEventListener("submit", submit);
    } else {
        paintGreeting(getGreeting);
        greetingForm.classList.add("shadow");
    }
}

init();