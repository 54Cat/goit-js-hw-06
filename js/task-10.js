const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createDivEl);
btnDestroy.addEventListener('click', destroyDivEl);

function createDivEl() {
  const amount = input.value;

  for (let i = 0; i < amount; i++){
    const createDiv = document.createElement("div");

    const value = (30 + i * 10);
    createDiv.style.width = `${value}px`;
    createDiv.style.height = `${value}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.marginTop = "10px";
    createDiv.style.marginBottom = "10px";

    boxes.appendChild(createDiv);
  }
}

function destroyDivEl() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
  
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}