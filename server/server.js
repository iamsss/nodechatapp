// BuitIn Variable
const path = require('path');
const http = require('http');

// Module VAriable Initilization
const express = require('express');
const socketIO = require('socket.io');

// Loading Addition Site File
const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validate');
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

    

    socket.on('join', (params, callback) => {
        if(!isRealString(params.name) || !isRealString(params.room)){
            callback('Name and room are required');
        }
        socket.join(params.room);

        
    socket.emit('newMessage', generateMessage('admin','Welcome To The Chat Room'));
    
        socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin',`New user ${params.name} has joined`));
        
        callback();
    });
    socket.on('createMessage',(message,callback) => {
        console.log('created Message ', message);
    
        io.emit('newMessage',generateMessage(message.from,message.text)); // io.emit is for 
    
        callback('This is from server');
        // socket.broadcast.emit('newMessage',{
        //     from:message.from,
        //     text: message.text,
        //     createdAt : new Date().getTime()            
        // }); // socket.brodcast  is for emiiting to all connected device expect himself

    }); // Methods to listen the emit event of client

    socket.on('createLocationMessage', (coords) => {
            io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude , coords.longitude));
    });
    

});


// Middleware
app.use(express.static(publicPath));



server.listen(port, () => console.log(`Example app listening on port ${port}!`));