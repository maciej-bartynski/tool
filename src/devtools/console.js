
const devtools = function () { };
devtools.toString = function () {
    const messenger = document.getElementById("messenger");
    messenger.className = "messenger_ok";
    messenger.innerText = "Console is opened";
}

console.log('%c', devtools);