/*
const Person = require('./person');
const person1 = new Person('John Doe', 30);
person1.greeting();
*/

/*
const Logger = require('./logger');

const logger = new Logger();
logger.on('message', function(data) {
    console.log('Called Listener', data);
});

logger.log('Hello World!');
logger.log('Hi');
logger.log('Hello');
*/

const http = require('http');
const path = require('path');
const fs = require('fs');

/*
const server = http.createServer(
    function(request, response) {
        if(request.url == '/') {
            fs.readFile(
                // Path to index.html using fs module
                path.join(__dirname, 'public', 'index.html'),
                // Callback 
                function(error, content) {
                    if(error) throw error;
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(content);
                }
            );
        } 
        else if(request.url == '/about') {
            fs.readFile(
                // Path to about.html using fs module
                path.join(__dirname, 'public', 'about.html'),
                // Callback 
                function(error, content) {
                    if(error) throw error;
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(content);
                }
            );
        }
        else if(request.url == '/api/users') {
            const users = [
                { name: 'Bob Smith', age: 40},
                { name: 'John Doe', age: 30}
            ];

            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(users));
        }
    }
);
*/

const server = http.createServer(
    function(request, response) {
        // Build file path
        var filePath = path.join(
            __dirname, 
            'public', 
            request.url === '/' ? 'index.html' : request.url
        );
        
        // Extension of file
        var extensionName = path.extname(filePath);
        // Content type
        var contentType = 'text/html';
        // Check extension name and set content type
        switch(extensionName) {
            case '.js': contentType = 'text/javascript'; break;
            case '.css': contentType = 'text/css'; break;
            case '.json': contentType = 'application/json'; break;
            case '.png': contentType = 'image/png'; break;
            case '.jpg': contentType = 'image/jpg'; break;           
        }

        // Read File
        fs.readFile(
            filePath, 
            function(error, content) {
                // Error encountered
                if(error) {
                    // Page not found
                    if(error.code == 'ENOENT') {
                        fs.readFile(
                            path.join(__dirname, 'public', '404.html'),
                            function(error, content) {
                                response.writeHead(200, {'Content-Type': 'text/html'});
                                response.end(content, 'utf8');
                            }
                        );
                    }
                    // Some server write 
                    else {
                        response.writeHead(500);
                        response.end(`Server Error: ${error.code}`);
                    }
                }
                // Success
                else {
                    response.writeHead(200, {'Content-Type': contentType});
                    response.end(content, 'utf8');
                }
            }
        );
    }
);

const PORT = process.env.PORT || 5000;

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`);
});