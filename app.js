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
let num1 = null;
let num2 = null;
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
    }
    if(button.id === 'decimal' && !displayValue.includes('.')){
        displayValue.push(button.textContent);
        display.textContent = displayValue.join('');
    }
    if(button.classList.contains('operator')){
        if(num1 !== null){
            num2 = parseFloat(displayValue.join(''));
            num1 = operate(operator, num1, num2);
            display.textContent = num1; 
        }
        if(!num1){num1 = parseFloat(displayValue.join(''));}
        operator = button.id;
        displayValue = [];
    }
    if(button.id === 'equals' && num1 !== null){
       num2 = parseFloat(displayValue.join(''));
       num1 = operate(operator, num1, num2);
       display.textContent = num1;
    }
    if(button.classList.contains('special')){
        let temp = parseFloat(displayValue.join('')); // number
        operator = button.id;
        temp = operate(operator, temp); // number
        display.textContent = temp;
        displayValue = temp.toString().split('');
    }
    console.log(displayValue)
    console.log({num1, num2, operator})
}



/*
if operator is pressed and num1 is empty fill num1
if equals is pressed and num1 has a value fill num2

USE CASES - flesh these out then reason through

after pressing equals, pressing equals repeatedly 
    can assign result of operation to num1
    can init new result variable with restul of operation and use that

after pressing equals, picking a new number and operator then equals
    is this the same case as above?

picking a number, an operator, another number, then another operator (should operate on first pair here)


*/

