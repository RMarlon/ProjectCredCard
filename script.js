const errorElement = document.createElement('small');
const imageContinue = document.querySelector('.image-complete');
const imageConfirm = document.querySelector('.right-container--main');

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
    if (inputNumber.value || inputMonth.value || inputYear.value || inputCVC.value !== '') {
        imageConfirm.style.display = `${'none'}`;
        imageContinue.style.display = `${'flex'}`;
    }

    if (inputNumber.value || inputName.value || inputMonth.value ||
        inputYear.value || inputCVC.value === '') {

        errorElement.innerHTML = `${'Wrong format, numbers only'}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputCVC.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputYear.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.after(errorElement);
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
    if (event.target.value === '') {
        nameCard.innerHTML = `${'Jane Appleseed'}`;
    }

});


const inputNumber = document.querySelector('.number');
inputNumber.addEventListener('input', (event) => {
    numberCard.innerHTML = `${event.target.value}`;

    if (event.target.value === '') {
        numberCard.innerHTML = `${'0000 0000 0000 0000'}`;

        errorElement.innerHTML = `${'Wrong format, numbers only'}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputNumber.after(errorElement);
    }
});

const inputMonth = document.querySelector('.month');
inputMonth.addEventListener('input', (event) => {
    monthCard.innerHTML = `${event.target.value}`;

    if (event.target.value === '') {
        monthCard.innerHTML = `${'00'}`;
    }
});

const inputYear = document.querySelector('.year');
inputYear.addEventListener('input', (event) => {
    yearCard.innerHTML = `${event.target.value}`;

    if (event.target.value === '') {
        yearCard.innerHTML = `${'00'}`;

        errorElement.innerHTML = `${"Can't be blank"}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputYear.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputYear.after(errorElement);
    }
});

const inputCVC = document.querySelector('.cvc');
inputCVC.addEventListener('input', (event) => {
    cvcCard.innerHTML = `${event.target.value}`;

    if (event.target.value === '') {
        cvcCard.innerHTML = `${'000'}`;

        errorElement.innerHTML = `${"Can't be blank"}`;
        errorElement.style.display = `${'block'}`;
        errorElement.style.marginTop = `${'10px'}`;
        errorElement.style.color = `${'hsl(0, 100%, 66%)'}`;
        inputCVC.style.borderColor = `${'hsl(0, 100%, 66%)'}`;
        inputCVC.after(errorElement);
    }
});