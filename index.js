const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

const httpServer = require('http').createServer((req, res) => {
    // serve the index.html file
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(content));
    res.end(content);
});

const io = require('socket.io')(httpServer);

/*io.on('connect', socket => {
    console.log('connect');
});*/

httpServer.listen(3000, () => {
    console.log('go to http://localhost:3000');
});



/* Send from server to client
io.on('connect', socket => {
    let counter = 0;
    setInterval(() => {
        socket.emit('hello', ++counter);
    }, 1000);
});
*/


/* receive data from client
io.on('connect', socket => {
    socket.on('hey', data => {
        console.log('hey', data);
    });
});
*/

// Receive message from client
io.on('connect', socket => {
    socket.on('message', data => {
        console.log('Message: ', data);
    });
});







