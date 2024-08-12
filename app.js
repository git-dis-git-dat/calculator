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
let num1 = [];
let num2 = [];
// const result = 0;

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

function setInput(button){
    if(button.classList.contains('num') && !operator){
        // if(num1.length === 0){num1.push(button.id.slice(1))}
        num1.push(button.id.slice(1))
    }
    if(button.classList.contains('operator')){
        operator = button.id;
        num1 = parseInt(num1.join(''));
    }
    if(button.classList.contains('num') && operator){
        num2.push(button.id.slice(1))
    }
    if(button.id === 'equals'){
        if(typeof num2 !== 'number'){num2 = parseInt(num2.join(''))};
        num1 = operate(operator, num1, num2)
        //num2 = [];
        console.log(num1)
    }
}

// split handling array to num and have seperate equals funtion that only works on numbers?

const buttons = document.querySelectorAll('.btn');
buttons.forEach((el)=>el.addEventListener('click', ()=>setInput(el)))


// push numbers into num1 [] when an operator is pressed join and parseInt

// listen to clicks on divs and get the text content and convert to number (int or float?) or operator and return them for use in the operate function
    // an ok side effect of getting text is that this might be a good spot to handle getting a decimal point(and disabling it from being entered again (unless it's on a new number)) before converting to num

// inverse and percent only require one number. they should fire off operate when they are pressed

// otherwise pressing equals should fire off operate on whatever is in the global variables
    // if there is only one value pressing equals should do nothing
    // if a valid operation has been performed pressing equals again should perform the last operation on the last result. this result could be a new variable, or it could take the place of num1. pressing an operator or equals should use the result var or new num1. pressing a number should clear the global vars

//need to decide on clear behavior. calcs often have two buttons, or toggle one to "C" clear last value and keep previous value and AC to clear all values. apple if num1, then operator pressed, then num2 entered then C'd uses num1 as num2 if equals pressed