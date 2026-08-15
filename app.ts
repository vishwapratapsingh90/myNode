/*
// --- JS format code ---

const eventEmitter = require('node:events');
// const myEmitter = new eventEmitter();

const Logger = require('./src/logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');

// --------

const os = require('node:os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}, Total Free Memory: ${freeMemory}`);

// --------

const http = require('node:http');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/api') {
        res.setHeader('Server', 'Ubuntu');
        res.write('Hello, World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(['Beginners Course', 'Advanced Course', 'Expert Course']));
        res.end();
    }
});

server.on("connection", (socket) => {
    console.log('New Connection', socket);
});

server.listen(3000);

console.log('Listening to port 3000...');
*/

import Logger from './src/logger';
import * as os from 'node:os';
import * as http from 'node:http';
import type { Socket } from 'node:net';

// Testing Node Events and Events-Listeners.

const logger = new Logger();

logger.on('messageLogged', (arg: {id: number, url:string}) => {
    console.log('Listener called', arg);
});

logger.log('message');

// OS info from OS module

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}, Total Free Memory: ${freeMemory}`);

// http module

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === '/' || req.url === '/api') {
        res.setHeader('Server', 'Ubuntu');
        res.write('Hello, World');
        res.end();
        return;
    }

    if (req.url === '/api/courses') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(['Beginners Course', 'Advanced Course', 'Expert Course']));
        res.end();
        return;
    }
});

server.on('connection', (socket: Socket) => {
  console.log('New Connection', socket.remoteAddress);
});

server.listen(3000, () => console.log('Listening to port 3000...'));
