const input = document.querySelector('#validation-input');
const checkNumber = Number(input.getAttribute('data-length'));

input.addEventListener("blur", onCheckValid);

function onCheckValid(event) {
    if (event.currentTarget.value.length === checkNumber) {
       return onValid();
    }
    onInvalid();
};

function onValid() {
    input.classList.remove("invalid");
    input.classList.add("valid");
};

function onInvalid() {
    input.classList.add("invalid");
    input.classList.remove("valid");
};