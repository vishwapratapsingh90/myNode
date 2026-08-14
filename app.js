const eventEmitter = require('node:events');
// const myEmitter = new eventEmitter();

const Logger = require('./logger');
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