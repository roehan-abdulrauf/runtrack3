const text = document.getElementById('keylogger');

document.addEventListener('keydown',textKey);

function textKey(event) {

    text.value += event.key;
}