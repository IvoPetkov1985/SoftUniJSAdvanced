function printEveryNThElement(array, step) {
    let resultArray = [];

    for (let index = 0; index < array.length; index += step) {
        const element = array[index];
        resultArray.push(element);
    }

    return resultArray;
}

console.log(printEveryNThElement(['5', '20', '31', '4', '20'], 2));
console.log(printEveryNThElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printEveryNThElement(['1', '2', '3', '4', '5'], 6))