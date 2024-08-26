const errorElement = document.createElement('small');

const nameCard = document.querySelector('.name--card', (element)=>{
    element.innerHTML = `${inputName}`;
});
const numberCard = document.querySelector('.number--card', (element) => {
    element.innerHTML = `${inputNumber}`;
});

const monthCard = document.querySelector('.card--month', (element)=>{
    element.innerHTML = `${inputMonth}`;
});

//eventos
const inputName = document.querySelector('.name');
inputName.addEventListener('input', (event)=>{

    nameCard.innerHTML = `${event.target.value}`;
    if(event.target.value === ''){
        nameCard.innerHTML = `${'Jane Appleseed'}`;
    }

});


const inputNumber = document.querySelector('.number');
inputNumber.addEventListener('input', (event) => {
    numberCard.innerHTML =  `${event.target.value}`;

    if(event.target.value === ''){
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
inputMonth.addEventListener('input', (event)=>{
    monthCard.innerHTML = `${event.target.value}`;

    if(event.target.value === ''){
        monthCard.innerHTML = `${'00'}`;
    }
});