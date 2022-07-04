// Задание 7

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>



const text = document.querySelector('#text');
const input = document.querySelector('#font-size-control');
text.style.fontSize = input.value + "px";

input.addEventListener("input", onInputChangeSize);

function onInputChangeSize() {
    text.style.fontSize = input.value + "px";
}