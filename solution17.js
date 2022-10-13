// Setting up storage to use during a for loop, including counters and arrays

// 17.) [ ] What are all of the letters that never appear consecutively in an English word? For example, we know 
//      that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because 
//      of “AARDVARK”, but which letters never appear consecutively?

// The Answers:  Q and X never appear consecutively.

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];
    let wordCounter = 0;

    // I started out with the alphabet from BB - ZZ without including AA and UU.
    // I deleted the letters that appeared consecutively all the way down the list to Q and X.
    for (word in wordsArray) {
        if (
            wordsArray[word].includes('QQ') && !wordsArray[word].includes('QQQ') || 
            wordsArray[word].includes('XX') && !wordsArray[word].includes('XXX') || 
            wordsArray[word].includes('QQQ') && !wordsArray[word].includes('QQQQ') || 
            wordsArray[word].includes('XXX') && !wordsArray[word].includes('XXXX') || 
            wordsArray[word].includes('QQQQ') && !wordsArray[word].includes('QQQQQ') || 
            wordsArray[word].includes('XXXX') && !wordsArray[word].includes('XXXXX') ||
            wordsArray[word].includes('QQQQQ') && !wordsArray[word].includes('QQQQQQ') || 
            wordsArray[word].includes('XXXXX') && !wordsArray[word].includes('XXXXXX') 
            ) {
                // Code block 1...
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