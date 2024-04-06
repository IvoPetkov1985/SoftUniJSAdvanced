function smallestTwoNumbers(array) {
    let sortedByAscending = array.sort((x, y) => x - y);
    let resultArray = sortedByAscending.slice(0, 2);
    let result = resultArray.join(" ");
    console.log(result);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function smallestTwoNumbersFromAnArray(array) {
    let resultArray = [];

    let smallest = Math.min(...array);
    resultArray.push(smallest);
    let indexOfSmallest = array.indexOf(smallest);
    array.splice(indexOfSmallest, 1);

    let secondSmallest = Math.min(...array);
    resultArray.push(secondSmallest);

    console.log(resultArray.join(" "));
}

smallestTwoNumbersFromAnArray([30, 15, 50, 5]);
smallestTwoNumbersFromAnArray([3, 0, 10, 4, 7, 3]);