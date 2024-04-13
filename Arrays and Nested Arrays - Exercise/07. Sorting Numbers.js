function sortingNumbers(inputArray) {
    let sortedNumbers = inputArray.sort((x, y) => x - y);
    let arrayLength = sortedNumbers.length;
    let resultArray = [];

    for (let i = 0; i < arrayLength / 2; i++) {
        let currSmallest = sortedNumbers.shift();
        resultArray.push(currSmallest);
        let currBiggest = sortedNumbers.pop();
        resultArray.push(currBiggest);
    }

    return resultArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));