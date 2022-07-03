// Задание 2

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");


ingredients.forEach ((item) => {
    
  // Создает элемент
  const li = document.createElement("li");

  // Добавляет элементу класс item
  li.classList.add("item");

  // Добавляет текстовое содержимое
  li.textContent = item;

  // Добавляет на станицу 
  ul.append(li);
  
});