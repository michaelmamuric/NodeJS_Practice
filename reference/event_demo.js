const EventEmitter = require('events');

// Create Emitter Class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', function() {
    console.log('Event fired!');
})

// Init event
myEmitter.emit('event');