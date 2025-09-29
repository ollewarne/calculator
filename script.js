const calculatorDisplay = document.getElementById("calculator-display");

//TODO: add a way to track the operator last used
//TODO: add variable to track the last number that was on the display

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

//TODO: add eventlistners for all system buttons

const eraseButton = document.getElementById("erase-calc-button");
eraseButton.addEventListener('click', () => {
    calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
});

const clearButton = document.getElementById("clear-display-button");
clearButton.addEventListener('click', () => {
    calculatorDisplay.textContent = "";
});
