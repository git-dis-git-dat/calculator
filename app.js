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

function posNegToggle(a){
    if (a > 0){
        return a * -1;
    }  else {
        return Math.abs(a);
    }
}

function toPercent(a){
    return a / 100;
}
