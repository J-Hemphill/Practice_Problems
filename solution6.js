// For loops and if conditions:

// 6.) [ ] What are all of the words that have a B and an X and are less than 5 letters long?

// The Answers:

// 'BOXY', 'BRUX', 'IBEX'

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];
    let wordLength = '0123';

    for (word in wordsArray) {
        if (wordsArray[word].includes('B') && wordsArray[word].includes('X') && wordsArray[word].length === wordLength.length) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    