// BuitIn Variable
const path = require('path');
const http = require('http');
// Module VAriable Initilization
const express = require('express');
const socketIO = require('socket.io');

// Loading Addition Site File


// declaring Global variable
var port = process.env.PORT || 3000; // Setup For Heroku Configurations Port
var app = express(); 
var server = http.createServer(app);
const publicPath = path.join(__dirname, '../public');

var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect',() => {
        console.log('Disconnected to client');
    });

    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'what is going on',
        createdAt: 123
    });

    socket.on('createMessage',(newEmail) => {
        console.log('created Email ', newEmail);
    }); // Methods to listen the emit event of client

});


// Middleware
app.use(express.static(publicPath));



server.listen(port, () => console.log(`Example app listening on port ${port}!`));