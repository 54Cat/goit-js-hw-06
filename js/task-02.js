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