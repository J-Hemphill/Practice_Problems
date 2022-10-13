// For loops and if conditions:

// 3.) [ ] What are all of the words containing a Q but not a U?

// The Answers:

/* 'FAQIR',     'FAQIRS',    'INQILAB',   'INQILABS',
  'MBAQANGA',  'MBAQANGAS', 'NIQAB',     'NIQABS',
  'QABALA',    'QABALAH',   'QABALAHS',  'QABALAS',
  'QABALISM',  'QABALISMS', 'QABALIST',  'QABALISTIC',
  'QABALISTS', 'QADI',      'QADIS',     'QAID',
  'QAIDS',     'QAIMAQAM',  'QAIMAQAMS', 'QALAMDAN',
  'QALAMDANS', 'QANAT',     'QANATS',    'QASIDA',
  'QASIDAS',   'QAT',       'QATS',      'QAWWAL',
  'QAWWALI',   'QAWWALIS',  'QAWWALS',   'QI',
  'QIBLA',     'QIBLAS',    'QIGONG',    'QIGONGS',
  'QINDAR',    'QINDARKA',  'QINDARS',   'QINTAR',
  'QINTARS',   'QIS',       'QOPH',      'QOPHS',
  'QORMA',     'QORMAS',    'QWERTIES',  'QWERTY',
  'QWERTYS',   'SHEQALIM',  'SHEQEL',    'SHEQELS',
  'TALAQ',     'TALAQS',    'TRANQ',     'TRANQS',
  'TSADDIQ',   'TSADDIQIM', 'TSADDIQS',  'TZADDIQ', 
  'TZADDIQIM', 'TZADDIQS',  'WAQF',      'WAQFS',
  'YAQONA',    'YAQONAS' */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];

    for (word in wordsArray) {
        if (wordsArray[word].includes('Q') && !wordsArray[word].includes('QQ') && !wordsArray[word].includes('U')) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    