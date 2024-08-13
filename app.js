// operations

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function inverse(a){
    if (a > 0){
        return a * -1;
    }  else {
        return Math.abs(a);
    }
}

function percent(a){
    return a / 100;
}
// variables

let operator = null;
let num1 = 0;
let num2 = 0;
// const result = 0;
let displayValue = [];

// 
function operate(operator, num1, num2){
    switch (operator){
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        case 'inverse':
            return inverse(num1);
        case 'percent':
            return percent(num1);
    }    
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((el)=>el.addEventListener('click', ()=>updateDisplay(el)));

function updateDisplay(button){
    let display = document.querySelector('#display');
    if(button.classList.contains('num')){
        displayValue.push(button.id.slice(1));
        display.textContent = displayValue.join('');
        console.log(displayValue)
    }
    if(button.id === 'decimal' && !displayValue.includes('.')){
        displayValue.push(button.textContent);
        display.textContent = displayValue.join('');
    }
}

// split handling array to num and have seperate equals funtion that only works on numbers?




