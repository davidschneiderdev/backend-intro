

// Use Node's require function to access the Node file system module
// FS stands for file system
// Require is like import in Python
const fs = require('fs');

// argument vector (vector is basically an array)
const fileName = process.argv[2];

// Error first callback
function printContents(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
    }
}

fs.readFile(fileName, printContents);

