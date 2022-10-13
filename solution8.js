// For loops and if conditions:

// 8.) [ ] What are all of the words with no vowel and not even a Y?

// The Answers:

/* 'BRR',   'BRRR',   'CH',
  'CRWTH', 'CRWTHS', 'CWM',
  'CWMS',  'CWTCH',  'HM',
  'HMM',   'MM',     'NTH',
  'PFFT',  'PHPHT',  'PHT',
  'PSST',  'PST',    'SH',
  'SHH',   'ST',     'TSK',
  'TSKS',  'TSKTSK', 'TSKTSKS',
  'TWP',   'ZZZ',    'ZZZS',
  '' */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];

    for (word in wordsArray) {
        if (!wordsArray[word].includes('A') && !wordsArray[word].includes('E') && !wordsArray[word].includes('I') && !wordsArray[word].includes('O') && !wordsArray[word].includes('U') && !wordsArray[word].includes('Y')) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    