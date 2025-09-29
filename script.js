function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function calculate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            displayContent = add(firstNumber, secondNumber);
            break;
        case "-":
            displayContent = subtract(firstNumber, secondNumber);
            break;
        case "/":
            displayContent = divide(firstNumber, secondNumber);
            break;
        case "*":
            displayContent = multiply(firstNumber, secondNumber);
            break;
    }
}
