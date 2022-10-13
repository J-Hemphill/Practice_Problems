// Setting up storage to use during a for loop, including counters and arrays

// 13.) [ ] What is the shortest word that contains all 5 vowels?

// These are the shortest words that contain all 5 vowels: 5 / 7 character words

/* 'DOULEIA', 'EULOGIA', 'MIAOUED', 'MOINEAU', 'SEQUOIA' */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];
    let wordLength = '1234567';

    for (word in wordsArray) {
        if (wordsArray[word].includes('A') && 
            wordsArray[word].includes('E') && 
            wordsArray[word].includes('I') && 
            wordsArray[word].includes('O') && 
            wordsArray[word].includes('U') &&
            wordsArray[word].length === wordLength.length) {
            // Code block 1
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    