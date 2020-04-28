const url = require('url');
const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myURL.href);
console.log(myURL.toString());
// Root domain
console.log(myURL.host);
// Host Name -> does not include port
console.log(myURL.hostname);
// Pathname
console.log(myURL.pathname);
// Serialized query
console.log(myURL.search);
// Params object
console.log(myURL.searchParams);
// Add param
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);
// Loop through params
myURL.searchParams.forEach(function(value, name) {
    console.log(`${name}: ${value}`);
}
);