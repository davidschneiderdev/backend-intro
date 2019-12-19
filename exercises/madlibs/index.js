
const fs = require('fs');
const petDefense = require('./petDefense');

let randomSentence = petDefense();
console.log(randomSentence);

fs.writeFile('madlibs.txt', randomSentence, {flag: 'a'}, (err) => {
    if (err) console.log(err);
    console.log('The madlib has been appended madlib.txt.');
});