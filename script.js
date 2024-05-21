let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function input(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.innerText = '0';
}

function operate(op) {
    if (currentInput === '') return;
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '';
    operator = op;
    document.getElementById('robot-message').innerText = `Operador ${op} selecionado!`;
}

function calculate() {
    if (operator === null || currentInput === '' || previousInput === '') return;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        case '%':
            result = parseFloat(previousInput) % parseFloat(currentInput);
            break;
    }

    display.innerText = result;
    document.getElementById('robot-message').innerText = `Resultado: ${result}`;
    currentInput = result;
    operator = null;
    previousInput = '';
}
