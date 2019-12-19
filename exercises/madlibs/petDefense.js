
const catNames = require('cat-names');
const supervillains = require('supervillains');
const superb = require('superb');

let randomCatName = catNames.random();
let randomVillainName = supervillains.random();
let randomSuperbWord = superb.random();

function petDefense() {
    return `The ${randomSuperbWord} ${randomCatName} saved us from ${randomVillainName}!`
}

module.exports = petDefense;