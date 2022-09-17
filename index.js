// Elements
const formElement = document.querySelector('form');
const proccessedContainerElement = document.querySelector('.feedback-container');
const sendFormButtton = document.getElementById('send-btn');
const continueButtton = document.getElementById('continue-btn');
const cardholderInput = document.getElementById('cardholder');
const cardnumberInput = document.getElementById('cardnumber');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc-label');
const cardholderError = document.querySelector('#cardholder + .error');
const cardnumberError = document.querySelector('#cardnumber + .error');
const monthError = document.querySelector('.month-year + .error');
const yearError = document.querySelector('.month-year + .error');
const cvcError = document.querySelector('#cvc-label + .error');
const cardNumber = document.getElementById('number');
const cardName = document.getElementById('name');
const cardDate = document.getElementById('date');
const cardCvc = document.getElementById('cvc');
// Functions

const handleInput = function () {
    let Return = true;
    // card holder is empty
    if (cardholderInput.value === "") {
        cardholderInput.style.borderColor = 'hsl(0, 100%, 66%)';
        cardholderError.textContent = "Enter A Name";
        cardholderError.style.display = 'block';
        Return = false;
    } else {
        cardholderInput.style.borderColor = 'hsl(270, 3%, 87%)';
        cardholderError.style.display = 'none';
    }

    // card number is empty
    if (cardnumberInput.value === "") {
        cardnumberInput.style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumberError.textContent = "Enter A Card Number";
        cardnumberError.style.display = 'block';
        Return = false;
    } else {
        cardnumberInput.style.borderColor = 'hsl(270, 3%, 87%)';
        cardnumberError.style.display = 'none';
    }

    // card number wrong format 
    if (!cardnumberInput.value.match(/[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/)) {
        cardnumberInput.style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumberError.textContent = "Wrong Format";
        cardnumberError.style.display = 'block';
        Return = false;
    } else {
        cardnumberInput.style.borderColor = 'hsl(270, 3%, 87%)';
        cardnumberError.style.display = 'none';
    }

    // month is empty 
    if (monthInput.value === "") {
        monthInput.style.borderColor = 'hsl(0, 100%, 66%)';
        monthError.textContent = "Enter Month";
        monthError.style.display = 'block';
        Return = false;
    } else {
        monthInput.style.borderColor = 'hsl(270, 3%, 87%)';
        monthError.style.display = 'none';
    }

    // year is empty
    if (yearInput.value === "") {
        yearInput.style.borderColor = 'hsl(0, 100%, 66%)';
        yearError.textContent = " Enter Year";
        yearError.style.display = 'block';
        Return = false;
    } else {
        yearInput.style.borderColor = 'hsl(270, 3%, 87%)';
        yearError.style.display = 'none';
    }

    // cvc is empty
    if (cvcInput.value === "") {
        cvcInput.style.borderColor = 'hsl(0, 100%, 66%)';
        cvcError.textContent = "Enter CVC";
        cvcError.style.display = 'block';
        Return = false;;
    } else {
        cvcInput.style.borderColor = 'hsl(270, 3%, 87%)';
        cvcError.style.display = 'none';
    }

    // cvc Wrong Format
    console.log(cvcInput.value.match(/[0-9]{3}/));
    if (!cvcInput.value.match(/[0-9]{3}/)) {
        cvcInput.style.borderColor = 'hsl(0, 100%, 66%)';
        cvcError.textContent = "Wrong Format";
        cvcError.style.display = 'block';
        Return = false;;
    } else {
        cvcInput.style.borderColor = 'hsl(270, 3%, 87%)';
        cvcError.style.display = 'none';
    }
    return Return;
}
const fillCardInfo = function () {
    cardNumber.textContent = cardnumberInput.value;
    cardName.textContent = cardholderInput.value;
    cardDate.textContent = `${monthInput.value}/${yearInput.value}`;
    cardCvc.textContent = cvcInput.value;
}
const processForm = function (e) {
    e.preventDefault();
    if (handleInput()) {
        formElement.style.display = 'none';
        proccessedContainerElement.style.display = 'block';
        fillCardInfo();
    }

}
const resetForm = function () {
    proccessedContainerElement.style.display = 'none';
    formElement.style.display = 'flex';
    cardNumber.textContent = '0000 0000 0000 000';
    cardName.textContent = 'Jhon Doe';
    cardDate.textContent = '00/00';
    cardCvc.textContent = '000';
    formElement.reset();
}
// Driver 
sendFormButtton.addEventListener('click', processForm);
continueButtton.addEventListener('click', resetForm);