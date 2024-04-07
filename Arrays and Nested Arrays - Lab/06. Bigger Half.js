function biggerHalf(inputArray) {
    let sortedArray = inputArray.sort((x, y) => x - y);
    let midIndex = Math.ceil(sortedArray.length / 2);
    let resultArray = sortedArray.slice(midIndex * -1);
    return resultArray;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));