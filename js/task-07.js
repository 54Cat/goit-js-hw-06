const text = document.querySelector('#text');
const input = document.querySelector('#font-size-control');
text.style.fontSize = input.value + "px";

input.addEventListener("input", onInputChangeSize);

function onInputChangeSize() {
    text.style.fontSize = input.value + "px";
}