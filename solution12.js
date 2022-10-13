// Setting up storage to use during a for loop, including counters and arrays

// 12.) [ ] Create and print an array containing all of the words that end in "GHTLY"

// The Answers:

 /* 'BRIGHTLY',    'DISTRAUGHTLY',
  'DOWNRIGHTLY', 'FORTHRIGHTLY',
  'FORTNIGHTLY', 'KNIGHTLY',
  'LIGHTLY',     'MIDNIGHTLY',
  'NIGHTLY',     'OUTRIGHTLY',
  'RIGHTLY',     'SIGHTLY',
  'SLIGHTLY',    'SPRIGHTLY',
  'STRAIGHTLY',  'TIGHTLY',
  'UNKNIGHTLY',  'UNSIGHTLY',
  'UPRIGHTLY',   'WIGHTLY' */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];

    for (word in wordsArray) {
        if (wordsArray[word].endsWith('GHTLY')) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    