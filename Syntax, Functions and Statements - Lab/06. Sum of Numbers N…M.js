function sumOfNumbers(firstEl, secondEl) {
    const firstNum = Number(firstEl);
    const secondNum = Number(secondEl);

    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNumbers('1', '5'));
console.log(sumOfNumbers('-8', '20'));