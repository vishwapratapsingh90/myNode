const EventEmitter = require('node:events');
// const myEmitter = new EventEmitter();

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
      // Send Http request
      console.log(message);

      this.emit("messageLogged", { id: 1, url: "http://" });
    }
}

module.exports = Logger;
