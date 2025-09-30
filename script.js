const calculatorDisplay = document.getElementById("calculator-display");

// get all buttons for the numbers and use the textcontent to know which button it is
const buttonWrapper = document.querySelector(".number-buttons-wrapper");
buttonWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('calculator-button')) {
        calculatorDisplay.textContent += event.target.textContent;
    }
})

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
    calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
});

const clearButton = document.getElementById("clear-display-button");
clearButton.addEventListener('click', () => {
    calculatorDisplay.textContent = "";
});

const equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener('click', () => {
    console.log("equals");
})

const addButton = document.getElementById("add-button");
addButton.addEventListener('click', () => {
    console.log("add");
})

const subtractButton = document.getElementById("subtract-button");
subtractButton.addEventListener('click', () => {
    console.log("subtract");
})

const divideButton = document.getElementById("divide-button");
divideButton.addEventListener('click', () => {
    console.log("divide");
})

const multiplyButton = document.getElementById("multiply-button");
multiplyButton.addEventListener('click', () => {
    console.log("multiply");
})
