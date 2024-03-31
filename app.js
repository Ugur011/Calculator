// add number function
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// add operator function
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

// clear function
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Value calculate
function calculateResult() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Squareroot calculate
function calculateSquareRoot() {
    var expression = document.getElementById('display').value;
    try {
        var result = Math.sqrt(eval(expression));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
// Dot Function
function appendDot() {
    var displayValue = document.getElementById('display').value;
    // If there is no dot already on the screen, add it
    if (displayValue.indexOf('.') === -1) {
        document.getElementById('display').value += '.';
    }
}

// factorial calculate function
function calculateFactorial() {
    var expression = document.getElementById('display').value;
    try {
        var num = parseInt(expression);
        var result = factorial(num);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Helper factorial function
function factorial(num) {
    if (num < 0) return 'Hata';
    if (num === 0) return 1;
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}