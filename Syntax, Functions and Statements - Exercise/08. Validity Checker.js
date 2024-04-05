function validityChecker(x1, y1, x2, y2) {
    let firstComparison = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    firstComparison % 1 === 0 ? 
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`) :
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    let secondComparison = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    secondComparison % 1 === 0 ?
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`) :
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    let thirdComparison = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    thirdComparison % 1 === 0 ?
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) :
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);