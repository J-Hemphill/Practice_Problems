// For loops and if conditions:

// 1.) [ ] What are all of the words containing UU?

// The Answers: 

/* 'BUSUUTI',       'BUSUUTIS',       'CARDUUS',
'CARDUUSES',     'CONTINUUM',      'CONTINUUMS',
'DUUMVIR',       'DUUMVIRAL',      'DUUMVIRATE',
'DUUMVIRATES',   'DUUMVIRI',       'DUUMVIRS',
'INDIVIDUUM',    'LITUUS',         'LITUUSES',
'MENSTRUUM',     'MENSTRUUMS',     'MUTUUM',
'MUTUUMS',       'MUUMUU',         'MUUMUUS',
'PARAMENSTRUUM', 'PARAMENSTRUUMS', 'RESIDUUM',
'RESIDUUMS',     'SQUUSH',         'SQUUSHED',
'SQUUSHES',      'SQUUSHING',      'TRIDUUM',
'TRIDUUMS',      'ULTRAVACUUM',    'ULTRAVACUUMS',
'VACUUM',        'VACUUMED',       'VACUUMING',
'VACUUMS',       'WELTANSCHAUUNG', 'WELTANSCHAUUNGS' */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];

    for (word in wordsArray) {
        if (wordsArray[word].includes('UU') && !wordsArray[word].includes('UUU')) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});