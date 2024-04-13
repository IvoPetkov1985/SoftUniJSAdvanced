function sortAnArrayBy2Criteria(arrayOfStrings) {
    let sorted = arrayOfStrings.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sorted.forEach(element => {
        console.log(element);
    });
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);