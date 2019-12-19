
const findEmoji = require('./findEmoji');
const args = process.argv.slice(2);

let newArray = args.map(findEmoji);
console.log(newArray);