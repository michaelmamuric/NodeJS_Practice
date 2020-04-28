const fs = require('fs');
const path  = require('path');

// Create folder
// mkdir is asynchronous -> has a callback parameter
// This will throw an error is test folder already exists
/*
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err;
    console.log('Folder created.');
});
*/

// Create and write to file
/*
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err) {
    if(err) throw err;
    console.log('File written to');

    // Append file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js!', function(err) {
        if(err) throw err;
        console.log('File written to');
    });
});
*/

// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
});

// Rename File
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), // Original name 
    path.join(__dirname, '/test', 'helloworld.txt'), // New name
    function(err) {
    if(err) throw err;
    console.log('File renamed.');
    }
);

