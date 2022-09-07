const btnIncrease = document.querySelector('button[data-action="increment"]');
const btnDecrease = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterValue = 0;

btnIncrease.addEventListener("click", onIncrement);
btnDecrease.addEventListener("click", onDecrement);

function onIncrement() {
    counterValue += 1;
    counter.textContent = counterValue;
};

function onDecrement() {
    counterValue -= 1;
    counter.textContent = counterValue;
};