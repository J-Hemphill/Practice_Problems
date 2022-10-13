// Setting up storage to use during a for loop, including counters and arrays

// 15.) [ ] Which of the letters Q, X, and Z is the least common?

// The answer: Q is the least common

// Words with: Q / 4069
// Words with: X / 6832
// Words with: Z / 10977

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];
    let wordCounter = 0;

    for (word in wordsArray) {
        if (wordsArray[word].includes('Z')) {
            wordsFoundContainer.push(wordsArray[word]);
            wordCounter += 1;
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
    console.log(wordCounter);
});    