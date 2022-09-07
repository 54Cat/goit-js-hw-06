const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');
btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  const colorRandom = getRandomHexColor();

  body.style.backgroundColor = colorRandom;
  color.textContent = colorRandom;
};