// For loops and if conditions:

// 2.) [ ] What are all of the words containing an X and a Y and a Z?

// The Answers:

/* 'ABAXIAL',         'ABAXILE',         'ABOIDEAUX',      'ABOITEAUX',
  'ABRASAX',         'ABRASAXES',       'ABRAXAS',        'ABRAXASES',
  'ACETOXYL',        'ACETOXYLS',       'ADAXIAL',        'ADDAX',
  'ADDAXES',         'ADIEUX',          'ADMINISTRATRIX', 'ADMIX',
  'ADMIXED',         'ADMIXES',         'ADMIXING',       'ADMIXT',
  'ADMIXTURE',       'ADMIXTURES',      'ADNEXA',         'ADNEXAL',
  'AEROTAXES',       'AEROTAXIS',       'AFFIX',          'AFFIXABLE',
  'AFFIXAL',         'AFFIXATION',      'AFFIXATIONS',    'AFFIXED',
  'AFFIXER',         'AFFIXERS',        'AFFIXES',        'AFFIXIAL',
  'AFFIXING',        'AFFIXMENT',       'AFFIXMENTS',     'AFFIXTURE',
  'AFFIXTURES',      'AFFLUX',          'AFFLUXES',       'AFFLUXION',
  'AFFLUXIONS',      'AFLATOXIN',       'AFLATOXINS',     'AFTERTAX',
  'ALDOHEXOSE',      'ALDOHEXOSES',     'ALDOXIME',       'ALDOXIMES',
  'ALEXANDER',       'ALEXANDERS',      'ALEXANDERSES',   'ALEXANDRINE',
  'ALEXANDRINES',    'ALEXANDRITE',     'ALEXANDRITES',   'ALEXIA',
  'ALEXIAS',         'ALEXIC',          'ALEXIN',         'ALEXINE',
  'ALEXINES',        'ALEXINIC',        'ALEXINS',        'ALEXIPHARMAKON',
  'ALEXIPHARMAKONS', 'ALEXIPHARMIC',    'ALEXIPHARMICS',  'ALKOXIDE',
  'ALKOXIDES',       'ALKOXY',          'ALLOXAN',        'ALLOXANS',
  'AMBIDEXTER',      'AMBIDEXTERITIES', 'AMBIDEXTERITY',  'AMBIDEXTEROUS',
  'AMBIDEXTERS',     'AMBIDEXTROUS',    'AMBIDEXTROUSLY', 'AMBISEXUAL',
  'AMBISEXUALITIES', 'AMBISEXUALITY',   'AMBISEXUALS',    'AMBOSEXUAL',
  'AMOXICILLIN',     'AMOXICILLINS',    'AMOXYCILLIN',    'AMOXYCILLINS',
  'AMPHIMIXES',      'AMPHIMIXIS',      'AMPHIOXI',       'AMPHIOXUS',
  'AMPHIOXUSES',     'AMPLEXICAUL',     'AMPLEXUS',       'AMPLEXUSES', */


let fs = require('fs');
fs.readFile('sowpods_for_practice_problems.txt', function(err, data) {
    if (err) throw err;
    let wordsArray = data.toString().split("\n");

    let wordsFoundContainer = [];

    for (word in wordsArray) {
        if (wordsArray[word].includes('X', 'Y', 'Z') && !wordsArray[word].includes('XX', 'YY', 'ZZ')) {
            wordsFoundContainer.push(wordsArray[word]);
            console.log('Found!');
        } else {
            console.log('Not found!');
        }
    }
    console.log(wordsFoundContainer);
});