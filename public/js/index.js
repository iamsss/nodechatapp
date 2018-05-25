var socket = io();
socket.on('connect',function() {
    console.log('Connected to server');

    
});
socket.on('disconnect',function() {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(data){
console.log('New Message',data);
}); // Listening newMessage emit event of server



socket.emit('createMessage',{
        from: 'saurav',
        text: 'Hi There'
    }, function(data) {
        console.log('Got it',data);
    }); // Methods to Send Data from client to serve



