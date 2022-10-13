// For loops and if conditions:

// 10.) [ ] What are all of the words that have all 5 vowels, in alphabetical order?

// The Answers:

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];
    let vowels = 'AEIOU';

    for (word in wordsArray) {
        if (wordsArray[word].includes(vowels)) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    