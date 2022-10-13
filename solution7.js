// For loops and if conditions:

// 7.) [ ] What are all of the words that both start and end with a Y?

// The Answers:

/* 'YABBY',      'YAMPY',     'YAPPINGLY',
  'YAPPY',      'YARELY',    'YATTERINGLY',
  'YAWEY',      'YAWNINGLY', 'YAWNY',
  'YAWY',       'YAY',       'YEARLY',
  'YEARNINGLY', 'YEASTILY',  'YEASTY',
  'YECHY',      'YELLOWLY',  'YELLOWY',
  'YEOMANLY',   'YEOMANRY',  'YESTERDAY',
  'YESTY',      'YEUKY',     'YIELDINGLY',
  'YIPPY',      'YOBBERY',   'YOBBISHLY',
  'YOLKY',      'YONDERLY',  'YOUNGBERRY',
  'YOUNGLY',    'YOUNGTHLY', 'YOUTHFULLY',
  'YOUTHLY',    'YOUTHY',    'YOWLEY',
  'YUCKY',      'YUKKY',     'YUKY',
  'YUMMY',      'YUPPIFY',   'YUPPY' */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];

    for (word in wordsArray) {
        if (wordsArray[word].startsWith('Y') && wordsArray[word].endsWith('Y')) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    