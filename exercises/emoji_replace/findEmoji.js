
const emojiEmotion = require('emoji-emotion');

function findEmoji(word) {
    try {
        for (let item of emojiEmotion) {
            if (word == item.name) {
                return item.emoji;
            } 
        }
    } catch(err) {
        return word;
    }
    return word;
}

module.exports = findEmoji;