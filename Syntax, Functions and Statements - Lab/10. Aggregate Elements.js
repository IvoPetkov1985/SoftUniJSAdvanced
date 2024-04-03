function aggregateElements(inputArray) {

    console.log(sumElements(inputArray));
    console.log(sumInverseValues(inputArray));
    console.log(concatenate(inputArray));

    function concatenate(array) {
        let converted = array.map(x => x.toString());

        let result = "";
        converted.forEach(element => {
            result += element;
        });

        return result;
    }

    function sumInverseValues(array) {
        return array.reduce((a, b) => a + 1/b, 0);
    }

    function sumElements(array) {
        return array.reduce((a, b) => a + b, 0);
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);