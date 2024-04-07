function processOddPositions(arrayOfNums) {
    let numsFromOddIndices = [];

    for (let i = 1; i < arrayOfNums.length; i += 2) {
        numsFromOddIndices.push(arrayOfNums[i]);
    }

    let reversedArray = [];

    for (let i = 0; i < numsFromOddIndices.length; i++) {
        reversedArray.push(numsFromOddIndices[numsFromOddIndices.length - 1 - i]);
    }

    let resultArray = [];

    for (let num of reversedArray) {
        resultArray.push(num * 2);
    }

    let output = resultArray.join(" ");
    return output;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));

function processNumsFromOddPositions(inputArray) {
    return inputArray.filter((x, i) => i % 2 == 1).reverse().map(x => x * 2).join(" ");
}

console.log(processNumsFromOddPositions([10, 15, 20, 25]));
console.log(processNumsFromOddPositions([3, 0, 10, 4, 7, 3]));