const container = document.querySelector('.container');
const errorElement = document.createElement('small');
const imageContinue = document.querySelector('.image-complete');
const imageConfirm = document.querySelector('.right-container--main');
const regexNumber = /^([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})$/;
const regexName = /^([A-z\s]{3,})$/;
const regexMonthYear = /^([0-9]{2})$/;
const regexCVC = /^([0-9]{3})$/;

const nameCard = document.querySelector('.name--card', (element) => {
    element.innerHTML = `${inputName}`;
});
const numberCard = document.querySelector('.number--card', (element) => {
    element.innerHTML = `${inputNumber}`;
});

const monthCard = document.querySelector('.card--month', (element) => {
    element.innerHTML = `${inputMonth}`;
});

const yearCard = document.querySelector('.card--year', (element) => {
    element.innerHTML = `${'inputYear'}`;
});

const cvcCard = document.querySelector('.number--cvc', (element) => {
    element.innerHTML = `${inputCVC}`;
});

//functions

function btnClick() {

    if (regexName.test([inputName.value])) {
        imageConfirm.style.display = `${'none'}`;
        imageContinue.style.display = `${'flex'}`;
    }
    else {
        errorElement.innerHTML = `${'Enter First name and last name'}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputName.after(errorElement);
    }

    if (regexNumber.test([inputNumber.value])) {
        imageConfirm.style.display = `${'none'}`;
        imageContinue.style.display = `${'flex'}`;
    }
    else {
        errorElement.innerHTML = `${'Wrong format, numbers only'}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.after(errorElement);
    }

    if (regexMonthYear.test([inputMonth.value]) && regexMonthYear.test([inputYear.value])) {
        imageConfirm.style.display = `${'none'}`;
        imageContinue.style.display = `${'flex'}`;
    }
    else {
        errorElement.innerHTML = `${"Can't be blank"}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputYear.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputYear.after(errorElement);
    }

    if (regexCVC.test([inputCVC.value])) {
        imageConfirm.style.display = `${'none'}`;
        imageContinue.style.display = `${'flex'}`;
    }
    else {
        errorElement.innerHTML = `${"Can't be blank"}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputCVC.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputCVC.after(errorElement);
    }
}

function btnClicked() {
    imageConfirm.style.display = `${''}`;
    imageContinue.style.display = `${'none'}`;
}
//eventos
const inputName = document.querySelector('.name');
inputName.addEventListener('input', (event) => {
    nameCard.innerHTML = `${event.target.value}`;

    if (!regexName.test([event.target.value]) || event.target.value === '') {
        nameCard.innerHTML = `${'Jane Appleseed'}`;

        errorElement.innerHTML = `${'Enter First name and last name'}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputName.after(errorElement);
    }
    else {
        errorElement.style.display = `${'none'}`;
        inputName.style.borderColor = `${'hsl(270, 3%, 87%)'}`;
    }

});


const inputNumber = document.querySelector('.number');
inputNumber.addEventListener('input', (event) => {
    numberCard.innerHTML = `${event.target.value}`;

    if (!regexNumber.test([event.target.value]) || event.target.value === '') {
        numberCard.innerHTML = `${'0000 0000 0000 0000'}`;

        errorElement.innerHTML = `${'Wrong format, numbers only'}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.after(errorElement);
    }
    else {
        errorElement.style.display = `${'none'}`;
        inputNumber.style.borderColor = `${'hsl(270, 3%, 87%)'}`;
    }
});

const inputMonth = document.querySelector('.month');
inputMonth.addEventListener('input', (event) => {
    monthCard.innerHTML = `${event.target.value}`;

    if (!regexMonthYear.test([event.target.value]) || event.target.value === '') {
        monthCard.innerHTML = `${'00'}`;

        errorElement.innerHTML = `${"Can't be blank"}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputYear.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputYear.after(errorElement);
    }
    else {
        errorElement.style.display = `${'none'}`;
        inputYear.style.borderColor = `${'hsl(270, 3%, 87%)'}`;;
    }
});

const inputYear = document.querySelector('.year');
inputYear.addEventListener('input', (event) => {
    yearCard.innerHTML = `${event.target.value}`;

    if (!regexMonthYear.test([event.target.value]) || event.target.value === '') {
        yearCard.innerHTML = `${'00'}`;

        errorElement.innerHTML = `${"Can't be blank"}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputYear.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputYear.after(errorElement);
    }
    else {
        errorElement.style.display = `${'none'}`;
        inputYear.style.borderColor = `${'hsl(270, 3%, 87%)'}`;;
    }
});

const inputCVC = document.querySelector('.cvc');
inputCVC.addEventListener('input', (event) => {
    cvcCard.innerHTML = `${event.target.value}`;

    if (!regexCVC.test([event.target.value]) || event.target.value === '') {
        cvcCard.innerHTML = `${'000'}`;

        errorElement.innerHTML = `${"Can't be blank"}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputCVC.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputCVC.after(errorElement);
    }
    else {
        errorElement.style.display = `${'none'}`;
        inputCVC.style.borderColor = `${'hsl(270, 3%, 87%)'}`;
    }
});