// For loops and if conditions:

// 9.) [ ] What are all of the words that have all 5 vowels, in any order?

// The Answers:

/* 'ABOIDEAU',        'ABOIDEAUS',       'ABOIDEAUX',       'ABOITEAU',
  'ABOITEAUS',       'ABOITEAUX',       'ABORTUARIES',     'ABSOLUTISE',
  'ABSOLUTISED',     'ABSOLUTISES',     'ABSOLUTIVE',      'ABSOLUTIZE',
  'ABSOLUTIZED',     'ABSOLUTIZES',     'ABSTEMIOUS',      'ABSTEMIOUSLY',
  'ABSTEMIOUSNESS',  'ABSTENTIOUS',     'ACCENTUATION',    'ACCENTUATIONS',
  'ACCESSORIUS',     'ACCOUNTANCIES',   'ACCOUTERING',     'ACETONURIA',
  'ACETONURIAS',     'ACIDOPHILUSES',   'ACINACEOUS',      'ACOLOUTHITE',
  'ACOLOUTHITES',    'ACOUCHIES',       'ACRIMONIOUSNESS', 'ACROTERIUM',
  'ACROTERIUMS',     'ACTINOMYCETOUS',  'ADENOVIRUS',      'ADENOVIRUSES',
  'ADIATHERMANOUS',  'ADIPOCEROUS',     'ADULTERATION',    'ADULTERATIONS',
  'ADVENTITIOUS',    'ADVENTITIOUSLY',  'ADVOUTRIES',      'AEQUORIN',
  'AEQUORINS',       'AEROACOUSTICS',   'AEROBIUM',        'AERONAUTIC',
  'AERONAUTICAL',    'AERONAUTICALLY',  'AERONAUTICS',     'AERONEUROSIS',
  'AERUGINOUS',      'AGARICACEOUS',    'AGGLUTINOGEN',    'AGGLUTINOGENIC',
  'AGGLUTINOGENS',   'AGOUTIES',        'AGROBUSINESS',    'AGROBUSINESSES',
  'AGROINDUSTRIES',  'AILOUROPHILE',    'AILOUROPHILES',   'AILOUROPHOBE',
  'AILOUROPHOBES',   'AILUROPHILE',     'AILUROPHILES',    'AILUROPHOBE',
  'AILUROPHOBES',    'ALBUGINEOUS',     'ALEURONIC',       'ALISMACEOUS',
  'ALLIACEOUS',      'ALUMINIFEROUS',   'ALUMINOSILICATE', 'ALUMINOSITIES',
  'ALUMINOTHERMIES', 'ALUMINOTHERMY',   'AMARYLLIDACEOUS', 'AMBIDEXTEROUS',
  'AMBIDEXTROUS',    'AMBIDEXTROUSLY',  'AMBIGUOUSNESS',   'AMBIGUOUSNESSES',
  'AMBITIOUSNESS',   'AMBITIOUSNESSES', 'AMBULATORIES',    'AMENTIFEROUS',
  'AMINOBUTENE',     'AMINOBUTENES',    'AMMUNITIONED',    'AMPHIBIOUSNESS',
  'AMPHICOELOUS',    'AMPHIOXUSES',     'AMPULLOSITIES',   'ANACARDIACEOUS',
  'ANAEROBIUM',      'ANDOUILLE',       'ANDOUILLES',      'ANDOUILLETTE',
  ... 3305 more items */

let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];

    for (word in wordsArray) {
        if ( wordsArray[word].includes('A') &&  wordsArray[word].includes('E') &&  wordsArray[word].includes('I') &&  wordsArray[word].includes('O') &&  wordsArray[word].includes('U')) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});    