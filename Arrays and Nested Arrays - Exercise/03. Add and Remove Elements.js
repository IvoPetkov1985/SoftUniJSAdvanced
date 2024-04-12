function addAndRemoveElements(arrayOfCommands) {
    let number = 1;
    let resultArray = [];

    arrayOfCommands.forEach(element => {
        element === "add" ? resultArray.push(number) : resultArray.pop();
        number++;
    });

    return resultArray.length > 0 ? resultArray.join("\n") : "Empty";
}

console.log(addAndRemoveElements(['add', 'add', 'add', 'add']));
console.log("------------------");
console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log("------------------");
console.log(addAndRemoveElements(['remove', 'remove', 'remove']));