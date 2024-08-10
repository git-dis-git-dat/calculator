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

const operator = null;
const num1 = 0;
const num2 = 0;

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

