const firstNumber = parseFloat(prompt('Enter your first number: '));
const secondNumber = parseFloat(prompt('Enter your second number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
var result;
if (operator == '+') {
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '/') {
    result = firstNumber / secondNumber;
}
else {
    result = firstNumber * secondNumber;
}


window.alert("Result is " + result);
