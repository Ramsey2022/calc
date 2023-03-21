
const display = document.getElementById('display');
const displayContent = document.createElement('div');
displayContent.textContent = 0;
display.appendChild(displayContent);

const buttons = document.getElementsByClassName('button');

const clearBtn = document.getElementById('clear');

const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const zero = document.getElementById('0');
const decimal = document.getElementById('.');

baseDisplay = () => displayContent.textContent = 0;

/* object? maybe
let numbers = [{
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'four': 4,
    'five': 5,
    'six': 6,
    'one': 1,
    'two': 2,
    'three': 3,
    'zero': 0,
    'decimal': '.',
}]
*/
clearBtn.addEventListener('click', baseDisplay);
seven.addEventListener("click", clickListener);
eight.addEventListener("click", clickListener);
nine.addEventListener("click", clickListener);
four.addEventListener("click", clickListener);
five.addEventListener("click", clickListener);
six.addEventListener("click", clickListener);
one.addEventListener("click", clickListener);
two.addEventListener("click", clickListener);
three.addEventListener("click", clickListener);
zero.addEventListener("click", clickListener);
decimal.addEventListener("click", clickListener);

function clickListener(event) {
    const input = event.target.id;
    displayContent.textContent = input;
}




const operate = {
add: (a,b) => (a + b),
sub: (a,b) => (a - b),
multiply: (a,b) => (a * b),
divide: (a,b) => (a / b),
}
//core math functions