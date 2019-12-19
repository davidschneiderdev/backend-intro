
const emojiEmotion = require('emoji-emotion');

function findEmoji(word) {
    // console.log(word);
    for (let item of emojiEmotion) {
        if (word == item.name) {
            // console.log(item.emoji);
            return item.emoji;
        } 
    }
    return word;
}

module.exports = findEmoji;