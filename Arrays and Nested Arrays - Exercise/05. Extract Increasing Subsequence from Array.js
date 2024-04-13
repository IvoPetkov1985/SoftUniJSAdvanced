function extractIncreasingSubsequence(array) {
    let resultArray = [];
    let currMaxValue = Number.MIN_SAFE_INTEGER;

    array.forEach(element => {
        if (element >= currMaxValue) {
            currMaxValue = element;
            resultArray.push(element);
        }
    });

    return resultArray;
}

console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequence([1, 2, 3, 4]));
console.log(extractIncreasingSubsequence([20, 3, 2, 15, 6, 1]));