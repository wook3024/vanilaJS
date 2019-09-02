const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clockTitle.innerText = `${hours}:${minutes < 10 ? `0`+ minutes : minutes}:${seconds < 10 ? `0`+ seconds : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();