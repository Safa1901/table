const phone = document.querySelector('#phone');

phone.addEventListener('keydown', function(event) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;

    if (event.key >= 0 && event.key <= 9) {
        isDigit = true;
    }

    if (event.key == '+') {
        isDash = true;
    }

    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
    }

    if (!isDigit && !isDash && !isControl) {
        event.preventDefault();
    }
});

const name = document.querySelector('#name');

name.addEventListener('keydown', function(event) {
    let isDaf = true;

    if (event.key >= 0 && event.key <= 9 ) {
        isDaf = false;
    }

    if (!isDaf) {
        event.preventDefault();
    }
});

const send = document.querySelector('#sendButton');
const nameInput = document.querySelector('#name');
const list = document.querySelector('#list');
const phoneInput = document.querySelector('#phone');
const myForm = document.querySelector('#myForm');


send.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(myForm)) {
        const newItem = document.createElement('li');
        newItem.classList.add('item');
        newItem.textContent = nameInput.value;
    
        const deleteButton = document.createElement('button');
        deleteButton.classList.add("close");
        deleteButton.textContent = 'x';
    
        deleteButton.addEventListener('click', function() {
            list.removeChild(newItem);
        })
        newItem.appendChild(deleteButton);
        list.appendChild(newItem);
    
        nameInput.value = '';
    }

});

function validateForm(form) {
    let valid = true;

    if (!validateDetalis(form.elements.name)) {
        valid = false;
    }

    if (!validateDetalis(form.elements.phone)) {
        valid = false;
    }

    return valid;
}

function validateDetalis(detalis) {
    if (!detalis.checkValidity()) {
        detalis.nextElementSibling.textContent = detalis.validationMessage;

        return false;
    } else {
        detalis.nextElementSibling.textContent = '';

        return true;
    }
}

