const path = require('path');

// Base file name
console.log(`File Name: ` + path.basename(__filename));

// Whole file name (for reference)
//console.log(__filename);

// Directory name
console.log(`Directory Name using path.dirname: ` + path.dirname(__filename));

// File extension
console.log(`File extension: ` + path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, `test`, `hello.html`));