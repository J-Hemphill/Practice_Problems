// Setting up storage to use during a for loop, including counters and arrays

// 11.) [ ] How many words contain the substring "TYPE”?

// The Answer is: 208

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];
    let wordCounter = 0;

    for (word in wordsArray) {
        if (wordsArray[word].includes('TYPE')) {
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