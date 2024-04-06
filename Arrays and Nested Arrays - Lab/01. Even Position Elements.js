function evenPositionElements(array) {
    return array.filter((e, i) => i % 2 == 0).join(" ");
}

console.log(evenPositionElements(['20', '30', '40', '50', '60']));
console.log(evenPositionElements(['5', '10']));

function evenPosElements(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            resultArray.push(array[i]);
        }
    }

    let result = resultArray.join(" ");
    console.log(result);
}

evenPosElements(['20', '30', '40', '50', '60']);
evenPosElements(['5', '10']);