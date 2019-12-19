
const findEmoji = require('./findEmoji');
const findRhyme = require('./findRhyme');
const args = process.argv.slice(2);

let newArray = args
                .map(findEmoji)
                .map(findRhyme);
                
console.log(newArray);

