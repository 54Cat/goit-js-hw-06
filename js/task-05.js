const input = document.querySelector('#name-input');
const nameInput = document.querySelector('#name-output');

input.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        return nameInput.textContent = event.currentTarget.value; 
    }
    
    nameInput.textContent = "Anonymous";
};