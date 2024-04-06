function negativePositiveNumbers(array) {
    const resultArray = [];
    const inputNumArray = array.map(x => Number(x));

    for (const num of inputNumArray) {
        if (num >= 0) {
            resultArray.push(num);
        } else {
            resultArray.unshift(num);
        }
    }

    const result = resultArray.join("\n");
    console.log(result);
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);