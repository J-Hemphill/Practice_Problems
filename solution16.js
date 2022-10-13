// Setting up storage to use during a for loop, including counters and arrays

// 16.) [ ] What is the longest palindrome?

let fs = require('fs');
let array = fs.readFileSync('sowpods_for_practice_problems.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
});

let wordsContainer = [];

function reverse(str) {
    return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
    return reverse(str) === str;
 }

 for (word in array) {
    if (array[word].includes(isPalindrome(array[word]))) {
        wordsContainer.push(array[word]);
        console.log('Found!');
    } else {
        console.log('Not found!');
    }
 }
console.log(wordsContainer)
console.log(isPalindrome(array));