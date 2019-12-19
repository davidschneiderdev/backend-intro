
const rhymeDict = require('rhymes');

function findRhyme(word) {
    try {
        let rhymeArray = rhymeDict(word);
        console.log(rhymeArray);
        let rhymeResult = rhymeArray[0].word
        if (word !== rhymeResult) {
            return rhymeArray[0].word;
        } else {
            return rhymeArray[1].word;
        }
    } catch (err) {
        return word;
    }
}

module.exports = findRhyme;