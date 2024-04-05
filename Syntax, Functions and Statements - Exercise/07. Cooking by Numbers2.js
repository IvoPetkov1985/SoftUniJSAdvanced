function cooking(number, ...operations) {
    let inputNum = Number(number);

    for (let operation of operations) {
        switch (operation) {
            case "chop": inputNum /= 2; break;
            case "dice": inputNum = Math.sqrt(inputNum); break;
            case "spice": inputNum += 1; break;
            case "bake": inputNum *= 3; break;
            case "fillet": inputNum *= 0.8; break;
        }

        console.log(inputNum);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');