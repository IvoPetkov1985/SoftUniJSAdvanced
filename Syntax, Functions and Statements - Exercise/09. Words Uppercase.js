function wordsUpperCase(inputString) {
    let words = inputString.split(/[^A-Za-z0-9]/);
    let filteredWords = words.filter(Boolean);
    let upperCaseWords = filteredWords.map(x => x.toUpperCase());
    console.log(upperCaseWords.join(", "));
}

wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');