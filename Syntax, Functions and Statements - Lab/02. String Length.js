function stringLength(str1, str2, str3) {
    let firstL = str1.length;
    let secondL = str2.length;
    let thirdL = str3.length;
    let sumLengths = firstL + secondL + thirdL;
    let averageLength = Math.floor(sumLengths / 3);

    console.log(sumLengths);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');