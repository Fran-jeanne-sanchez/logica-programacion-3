function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

function isNumber(value){
    return !isNaN(value) && Number.isInteger(parseFloat(value));
}

function calculateFactorial(){
    const inputElement = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
    const userInput = inputElement.value;
    const number = parseFloat(userInput);
    if (isNumber(userInput)) {
        const factorialResult = factorial(number);
        resultElement.textContent = `El factorial de ${number} es ${factorialResult}.`;
    } else {
        resultElement.textContent = `Por favor, ingresa un número válido.`;
    }
}