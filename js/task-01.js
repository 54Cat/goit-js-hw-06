const categoryListEl = document.querySelectorAll('li.item');
const categoryLength = categoryListEl.length;
console.log('Number of categories:', categoryLength);

categoryListEl.forEach ((category) => {
    
    const categoryTitleEl = category.querySelector('h2');
    const categoryTitle = categoryTitleEl.textContent;
    console.log('Category:', categoryTitle);

    const categoryItemsEl = category.querySelectorAll('li');
    const elementsLength = categoryItemsEl.length;
    console.log('Elements:', elementsLength);
});