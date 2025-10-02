const calculatorDisplay = document.getElementById("calculator-display");

let lastButtonWasOperator = false;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let numbersToCalculate = [];

// get all buttons for the numbers and use the textcontent to know which button it is
const buttonWrapper = document.querySelector(".number-buttons-wrapper");
buttonWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('calculator-button')) {
        lastButtonWasOperator = false;
        calculatorDisplay.textContent += event.target.textContent;
    }
})

function getNumbersAndOperator() {
    numbersToCalculate = calculatorDisplay.textContent.split(" ");
    firstNumber = parseInt(numbersToCalculate[0]);
    secondNumber = parseInt(numbersToCalculate[2]);
    operator = numbersToCalculate[1];
}

// Is this the best way to do this? Should these functions be inside of the calculate function instead?
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
            calculatorDisplay.textContent = add(firstNumber, secondNumber);
            break;
        case "-":
            calculatorDisplay.textContent = subtract(firstNumber, secondNumber);
            break;
        case "/":
            calculatorDisplay.textContent = divide(firstNumber, secondNumber);
            break;
        case "*":
            calculatorDisplay.textContent = multiply(firstNumber, secondNumber);
            break;
    }
}

//TODO: add a button to write a dot to enable calculating floats

const eraseButton = document.getElementById("erase-calc-button");
eraseButton.addEventListener('click', () => {
    // delete rest of negative number instead of leaving a - behind
    if (calculatorDisplay.textContent.length === 2 && calculatorDisplay.textContent[0] === "-") {
        calculatorDisplay.textContent = "";
    }
    // since operators are wrapped in spaces we check if it is a space and then remove three characters instead
    if (calculatorDisplay.textContent.slice(-1) === " ") {
        lastButtonWasOperator = false;
        calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -3);
    } else calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
});

const clearButton = document.getElementById("clear-display-button");
clearButton.addEventListener('click', () => {
    calculatorDisplay.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    lastButtonWasOperator = false;
});

const equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener('click', () => {
    getNumbersAndOperator();
    calculate(operator, firstNumber, secondNumber);
})

const addButton = document.getElementById("add-button");
addButton.addEventListener('click', () => {
    getNumbersAndOperator();
    if (numbersToCalculate.length === 3) {
        calculate(operator, firstNumber, secondNumber);
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " + ";
    } else if (lastButtonWasOperator || calculatorDisplay.textContent === "") {
        // only add operator to display if it is not empty or you press multiple operator buttons
        return;
    } else {
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " + ";
    }
})

const subtractButton = document.getElementById("subtract-button");
subtractButton.addEventListener('click', () => {
    getNumbersAndOperator();
    // check if number is not a number befor running calculation. Otherwise you can't write a negative second number
    if (numbersToCalculate.length === 3 && !isNaN(secondNumber)) {
        calculate(operator, firstNumber, secondNumber);
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " - ";
    } else if (calculatorDisplay.textContent === "" || calculatorDisplay.textContent.slice(-1) === " ") {
        calculatorDisplay.textContent += "-"
    } else {
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " - ";
    }
})

const divideButton = document.getElementById("divide-button");
divideButton.addEventListener('click', () => {
    getNumbersAndOperator();
    if (numbersToCalculate.length === 3) {
        calculate(operator, firstNumber, secondNumber);
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " / ";
    } else if (lastButtonWasOperator || calculatorDisplay.textContent === "") {
        // only add operator to display if it is not empty or you press multiple operator buttons
        return;
    } else {
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " / ";
    }
})

const multiplyButton = document.getElementById("multiply-button");
multiplyButton.addEventListener('click', () => {
    getNumbersAndOperator();
    if (numbersToCalculate.length === 3) {
        calculate(operator, firstNumber, secondNumber);
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " * ";
    } else if (lastButtonWasOperator || calculatorDisplay.textContent === "") {
        // only add operator to display if it is not empty or you press multiple operator buttons
        return;
    } else {
        lastButtonWasOperator = true;
        calculatorDisplay.textContent += " * ";
    }
})
