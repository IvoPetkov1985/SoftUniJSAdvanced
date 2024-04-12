function printAnArrayWithDelimiter(array, delimiter) {
    let printLine = array.join(delimiter);
    console.log(printLine);
}

printAnArrayWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);

printAnArrayWithDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);