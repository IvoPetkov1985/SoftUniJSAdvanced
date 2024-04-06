function sumFirstLast(array) {
    let arrayOfNums = array.map(x => Number(x));
    let firstNum = arrayOfNums[0];
    let lastNum = arrayOfNums[arrayOfNums.length - 1];
    return firstNum + lastNum;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));

function sumFirstAndLastNumber(array) {
    return Number(array.shift()) + Number(array.pop());
}

console.log(sumFirstAndLastNumber(['20', '30', '40']));
console.log(sumFirstAndLastNumber(['5', '10']));