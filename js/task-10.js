// Задание 10 (выполнять не обязательно)

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.



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