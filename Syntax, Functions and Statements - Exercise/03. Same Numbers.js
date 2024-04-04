function sameNumbers(inputNum) {
    let numAsArray = inputNum.toString().split("");

    let firstSymbol = numAsArray[0];
    let areSame = numAsArray.every(x => x == firstSymbol);

    let sumDigits = numAsArray.map(x => Number(x)).reduce((acc, value) => acc + value, 0);

    console.log(areSame);
    console.log(sumDigits);
}

sameNumbers(1234);
sameNumbers(2222222);

function sameNumbers2(inputNum) {
    let areSame = true;
    let sum = 0;

    let numAsString = String(inputNum);
    let firstSymbol = numAsString[0];
    sum += Number(firstSymbol);

    for (let i = 1; i < numAsString.length; i++) {

        if (numAsString[i] !== numAsString[i - 1]) {
            areSame = false;
        }

        sum += Number(numAsString[i]);
    }

    console.log(areSame);
    console.log(sum);
}

sameNumbers2(1234);
sameNumbers2(2222222);