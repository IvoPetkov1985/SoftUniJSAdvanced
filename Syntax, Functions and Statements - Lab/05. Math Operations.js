function mathOperations(firstNum, secondNum, oper) {
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let modularDivide = (x, y) => x % y;
    let powered = (x, y) => x ** y;

    let result = 0;

    switch (oper) {
        case "+": result = add(firstNum, secondNum); break;
        case "-": result = subtract(firstNum, secondNum); break;
        case "*": result = multiply(firstNum, secondNum); break;
        case "/": result = divide(firstNum, secondNum); break;
        case "%": result = modularDivide(firstNum, secondNum); break;
        case "**": result = powered(firstNum, secondNum); break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');