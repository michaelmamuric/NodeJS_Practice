const http = require('http');

// Create server object
http.createServer(
    function(request, response) {
        // Write response
        response.write('Hello World');
        response.end();
    }
).listen(5000, function() {
    console.log('Server running...');
});