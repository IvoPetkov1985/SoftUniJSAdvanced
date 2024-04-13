function listOfNames(arrayOfNames) {
    const sorted = arrayOfNames.sort((a, b) => a.localeCompare(b));
    sorted.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);