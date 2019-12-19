

// Use Node's require function to access the Node file system module
// FS stands for file system
// Require is like import in Python
const fs = require('fs');

// Import function from printer.js local file
const {printContents, printSentiment} = require('./printer');
// This is the "destructuring" syntax

// argument vector (vector is basically an array)
const fileName = process.argv[2];

fs.readFile(fileName, printSentiment);

