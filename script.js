const calculatorDisplay = document.getElementById("calculator-display");
const numberButtons = document.getElementsByClassName("calculator-button");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        calculatorDisplay.textContent += numberButtons[i].textContent;
    });
}

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

//TODO: add eventlistners for all system buttons

const eraseButton = document.getElementById("erase-calc-button");
eraseButton.addEventListener('click', () => {
    calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
});
