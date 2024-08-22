let numberCard = document.querySelector('.number--card', (element) => {
    element.innerHTML = `${inputNumber}`;
});

let inputNumber = document.querySelector('.number');
inputNumber.addEventListener('input', (event) => {
    numberCard.innerHTML =  `${event.target.value}`;

    if(event.target.value === ''){
        numberCard.innerHTML = `${'0000 0000 0000 0000'}`;
    }
});