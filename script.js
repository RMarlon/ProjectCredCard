//Front Card

const yuorName = document.getElementById('name-card-front');
const inputName = document.getElementById('name');
inputName.addEventListener('input', dataOfName);

const numberCard = document.getElementById('number-front-card');
const inputNumber = document.getElementById('number');
inputNumber.addEventListener('input', dataOfNumber);

const valityMonth = document.getElementById('vality-number-front-card');
const inputValityMonth = document.getElementById('month');
inputValityMonth.addEventListener('input', cardExpiringDateMonth);

const valityYeah = document.getElementById('vality-card');
const inputValityYeah = document.getElementById('yeah');
inputValityYeah.addEventListener('input', cardExpiringDateYeah);

const alertError = document.querySelectorAll('#error');

//End Front Card

//Back card

const cvcCard = document.getElementById('number-back-card');
const inputCvcCard = document.getElementById('card-code');
inputCvcCard.addEventListener('input', numberBackCard);

//End Back Card

//Start Button Confirm

const btnConfirm = document.getElementById('confirm');
btnConfirm.addEventListener('click', clikMe);

const btnComplete = document.getElementById('complete');
btnComplete.addEventListener('click', completeBtn);

const form = document.querySelectorAll('#form-card-data')[0];
//End Button Confirm

// Initial error events

function setError(index) {

    alertError[index].style.color = 'hsl(0, 100%, 66%)';
    alertError[index].style.display = 'block';

}

function removeError(index) {

    alertError[index].style.color = '';
    alertError[index].style.display = 'none';

}

function valityNumber() {

    inputNumber.addEventListener('keypress', () => {

        let lengthNumber = inputNumber.value.length;

        if (lengthNumber === 4 || lengthNumber === 9 || lengthNumber === 14) {

            inputNumber.value += " ";
        }
    });

    if (inputNumber.value.length === 0 || inputNumber.value.length === 19) {

        return removeError(0);

    }
    else {
        return setError(0);
    }
}


function valityNumberMonth() {


    if (inputValityMonth.value.length === 0 || inputValityMonth.value.length === 2) {

        return removeError(1);
    }
    else {

        return setError(1);
    }

}

function cardCodeCvc() {

    if (inputCvcCard.value.length === 0 || inputCvcCard.value.length === 3) {

        return removeError(2)
    }
    else {

        return setError(2)
    }
}

// End error events

//function's of events

function dataOfName(event) {

    let allNames = event.target.value;

    if (allNames) {
        allNames = yuorName.innerText = allNames.replace(/[\d\W]/g, " ");
    }
    else {
        allNames = yuorName.innerHTML = `<span> ${'Jane Appleseed'}</span>`;
    }
}


function dataOfNumber(event) {

    let allNumber = event.target.value;

    if (allNumber) {
        allNumber = numberCard.innerText = allNumber.replace(/\D/g, " ");
    }
    else {
        allNumber = numberCard.innerHTML = `<span>${'0000 0000 0000 0000'}</span>`;
    }
}

function cardExpiringDateMonth(event) {

    let allValityMonth = event.target.value;

    if (allValityMonth) {
        allValityMonth = valityMonth.innerText = allValityMonth.replace(/\D/g, "") + ' / ';
    }
    else {
        allValityMonth = valityMonth.innerHTML = `<span> ${'00 /'} </span>`;
    }
}

function cardExpiringDateYeah(event) {

    let allValityYeah = event.target.value;

    if (allValityYeah) {
        allValityYeah = valityYeah.innerText = allValityYeah.replace(/\D/g, "");
    }
    else {
        allValityYeah = valityYeah.innerHTML = `<span>${'00'}</span>`;
    }
}

function numberBackCard(event) {

    let cvcCardCode = event.target.value;

    if (cvcCardCode) {
        cvcCardCode = cvcCard.innerText = cvcCardCode.replace(/\D/g, "");
    }
    else {
        cvcCardCode = cvcCard.innerHTML = `<span>${'000'}</span>`;
    }
}



function clikMe() {

    form.addEventListener('submit', (event) => {
        event.preventDefault();



        if (inputNumber.value === '' && inputValityMonth.value === '' && inputValityYeah.value === '' && inputCvcCard.value === '') {

            setError(0);
            setError(1);
            setError(2);

        }
        else if (inputName.value === '') {

            alert('It is necessary to fill in your name, please!');
        }
        else {
            removeError(0);
            removeError(1);
            removeError(2);
            btnComplete.style.display = 'inline';
            form.style.display = 'none';
        }
    });
    
}

function completeBtn() {

    form.style.display = '';
    btnComplete.style.display = 'none';
}

//End Function's of Events