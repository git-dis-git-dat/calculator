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
        if(displayValue.length < 1){
            displayValue.push(0, button.textContent);
        }else{
            displayValue.push(button.textContent);
        }
        
        display.textContent = displayValue.join('');
    }
    if(button.classList.contains('special')){
        
        let temp = parseFloat(display.textContent); 
        temp = operate(button.id, temp); // number
        display.textContent = temp;
        displayValue = temp.toString().split('');
    }
    if(button.classList.contains('operator')){
        if(!num1){
            num1 = parseFloat(displayValue.join(''));
        }else if(!num2){
            num2 = parseFloat(displayValue.join(''));
            num1 = operate(operator, num1, num2);
            display.textContent = num1;
            num2 = null
        }else{
            num2 = null
        }
        operator = button.id;
        displayValue = [];
    }
    if(button.id === 'equals'){
        if(num1 !== null){
            if(!num2){
                num2 = parseFloat(displayValue.join(''));
            }
            
            num1 = operate(operator, num1, num2);
            display.textContent = num1;
    
            displayValue = []
        } 
    }
    if(button.id === 'clear'){
        operator = null;
        num1 = null;
        num2 = null;
        displayValue = [];
        display.textContent = 0;
    }
    
    console.log(displayValue)
    console.log({num1, num2, operator})
}

// need to handle operator w no display value (checking for no display value may break chained operations)
// related to above, how to handle 0 + number at start?
// maybe an init functionn that sets the main variables that can be reused for clear?


