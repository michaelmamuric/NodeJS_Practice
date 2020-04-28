const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        //Call Event
        this.emit('message',  { id: uuid.v4(), msg: msg});
    }
}

module.exports = Logger;