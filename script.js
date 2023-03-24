const container = document.querySelector('#container');

const display = document.getElementById('display');
const displayContent = document.createElement('div');
display.appendChild(displayContent);
displayContent.textContent = '0';

const calculator = {
    displayValue: '0',
    firstValue: null,
    waitingForSecondValue: false,
    operator: null,
};

updateDisplay = () => displayContent.textContent = calculator.displayValue;

const keys = document.querySelector('#btnContainer');

keys.addEventListener('click', (event) => {
    const {target} = event;
    const {value} = target;
    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          operation(value);
          break;
        case '.':
          inputDecimal(value);
          break;
        case 'clear':
          reset();
          break;
        case 'deleteBtn':
            deleteDigit();
            break;
        default:
          if (Number.isInteger(parseFloat(value))) {
            inputDigit(value);
          }
      }
    
      updateDisplay();
    });

function inputDigit(digit){
    const {displayValue, waitingForSecondValue} = calculator;
    if (waitingForSecondValue === true){
        calculator.displayValue = digit;
        calculator.waitingForSecondValue = false;
    } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function deleteDigit() {
    if (calculator.displayValue !== '0') {
    calculator.displayValue = calculator.displayValue.toString().slice(0,-1);
    }
}

function inputDecimal(dot){
    if (calculator.waitingForSecondValue === true){
        calculator.displayValue = '0';
        calculator.waitingForSecondValue = false;
        return;
    }
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}

function operation(nextOperator){
    const {firstValue, displayValue, operator} = calculator;
    const inputValue = parseFloat(displayValue);
    if(!inputValue){
        return;
    }
    if(operator && calculator.waitingForSecondValue){
        calculator.operator = nextOperator;
        return;
    }

    if (firstValue === null && !isNaN(inputValue)){
        calculator.firstValue = inputValue;
    } else if (operator){
        const result = calculation(firstValue, inputValue, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstValue = result;
    }
    calculator.waitingForSecondValue = true;
    calculator.operator = nextOperator;
}

add = (a,b) => (a + b);
sub = (a,b) => (a - b);
multiply = (a,b) => (a * b);
divide = (a,b) => (a / b);
//core math functions




const calculation = (firstValue, secondValue, operator) => {
    if (operator === '+') {
        return add(firstValue, secondValue);
      } else if (operator === '-') {
        return sub(firstValue, secondValue);
      } else if (operator === '*') {
        return multiply(firstValue, secondValue);
      } else if (operator === '/') {
        return divide(firstValue, secondValue);
        }
    
      return secondValue;
    }

function reset(){
    calculator.displayValue = '0';
    calculator.firstValue = null;
    calculator.waitingForSecondValue = false;
    calculator.operator = null;
}