
const display = document.getElementById('display');
const displayContent = document.createElement('div');
displayContent.textContent = '0';
display.appendChild(displayContent);

const numBtn = document.querySelectorAll('[numbers]');
const opBtn = document.getElementsByClassName('opBtn');

numBtn.forEach((button) => button.addEventListener('click', () => buttonEvent(button.textContent)));

clearDisplay = () => displayContent.textContent = '';

function buttonEvent(number) {
    if (displayContent.textContent === '0'){
        clearDisplay();
        displayContent.textContent += number;
    }else {
        displayContent.textContent += number;
     }}



const clearBtn = document.getElementById('clear');
baseDisplay = () => displayContent.textContent = '0';
clearBtn.addEventListener('click', baseDisplay);


/*
function clickListener(event) {
    const input = event.target.id;
    displayContent.textContent = input;
}
*/





const operate = {
add: (a,b) => (a + b),
sub: (a,b) => (a - b),
multiply: (a,b) => (a * b),
divide: (a,b) => (a / b),
}
//core math functions