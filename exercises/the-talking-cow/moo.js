
const cowsay = require('cowsay');

function moo(text, eyes, tongue) {
    const theCowSaid = cowsay.say({
        text : text,
        e : eyes,
        T : tongue
    });
    console.log(theCowSaid);
}

module.exports = moo;