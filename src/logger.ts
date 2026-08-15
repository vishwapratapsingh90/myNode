/*
// --- JS format code ---

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
*/

import { EventEmitter } from "node:events";

const url = 'http://mylogger.io/log';

interface MessageLogged {id: number, url: string};

export default class Logger extends EventEmitter {
  log(message: string): void {
    // Send Http request
    console.log(message);
    this.emit('messageLogged', {id: 1, url: 'http://'} as MessageLogged);
  }
}
