// For loops and if conditions:

// 4.) [ ] What are all of the words that contain the word CAT and are exactly 5 letters long?

// The Aswers:

/* 'CATCH', 'CATER',
  'CATES', 'CATTY',
  'DUCAT', 'SCATH',
  'SCATS', 'SCATT' */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];
    let wordLength = '01234';

    for (word in wordsArray) {
        if (wordsArray[word].includes('CAT') && wordsArray[word].length === wordLength.length) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    