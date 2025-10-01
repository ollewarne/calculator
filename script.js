const calculatorDisplay = document.getElementById("calculator-display");

let lastOperator = "";
let lastNumber = 0;

// get all buttons for the numbers and use the textcontent to know which button it is
const buttonWrapper = document.querySelector(".number-buttons-wrapper");
buttonWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('calculator-button')) {
        lastOperator = "";
        calculatorDisplay.textContent += event.target.textContent;
    }
})

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

const eraseButton = document.getElementById("erase-calc-button");
eraseButton.addEventListener('click', () => {
    // since operators are wrapped in spaces we check if it is a space and then remove three characters instead
    if (calculatorDisplay.textContent.slice(-1) === " ") {
        calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -3);
    } else calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
});

const clearButton = document.getElementById("clear-display-button");
clearButton.addEventListener('click', () => {
    calculatorDisplay.textContent = "";
    lastNumber = 0;
    lastOperator = "";
});

const equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener('click', () => {
    console.log("equals");
    //TODO: run calculate function with last num, operator and current num.
})

//TODO: if add, subtract, divide or multiply is clicked after you already have two numbers. Run calculate function.
//TODO: save last number on click, so it can be used in calculate.
const addButton = document.getElementById("add-button");
addButton.addEventListener('click', () => {
    // only add operator to display if it is not empty or you press multiple operator buttons
    if (lastOperator !== "" || calculatorDisplay.textContent === "") {
        console.log(lastOperator);
        return;
    } else {
        lastOperator = "+";
        calculatorDisplay.textContent += " + ";
    }
})

const subtractButton = document.getElementById("subtract-button");
subtractButton.addEventListener('click', () => {
    // only add operator to display if it is not empty or you press multiple operator buttons
    if (lastOperator !== "" || calculatorDisplay.textContent === "") {
        return;
    } else {
        lastOperator = "-";
        calculatorDisplay.textContent += " - ";
    }
})

const divideButton = document.getElementById("divide-button");
divideButton.addEventListener('click', () => {
    // only add operator to display if it is not empty or you press multiple operator buttons
    if (lastOperator !== "" || calculatorDisplay.textContent === "") {
        return;
    } else {
        lastOperator = "/";
        calculatorDisplay.textContent += " / ";
    }
})

const multiplyButton = document.getElementById("multiply-button");
multiplyButton.addEventListener('click', () => {
    // only add operator to display if it is not empty or you press multiple operator buttons
    if (lastOperator !== "" || calculatorDisplay.textContent === "") {
        return;
    } else {
        lastOperator = "*";
        calculatorDisplay.textContent += " * ";
    }
})
