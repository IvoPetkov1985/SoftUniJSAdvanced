function lastKNumbersSequence(n, k) {
    let resultArray = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let currSequence = resultArray.slice(k * -1);

        for (let j = 0; j < currSequence.length; j++) {
            sum += currSequence[j];
        }

        resultArray[i] = sum;
    }

    return resultArray;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));

function lastKNumbers(n, k) {
    let resultArray = [1];

    for (let i = 1; i < n; i++) {
        let kSequence = resultArray.slice(-k);
        let sumToPush = kSequence.reduce((acc, val) => acc + val, 0);
        resultArray.push(sumToPush);
    }

    return resultArray;
}

console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8, 2));