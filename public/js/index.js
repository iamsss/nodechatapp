var socket = io();
socket.on('connect',function() {
    console.log('Connected to server');

    socket.emit('createMessage',{
        from: 'ahsgh@ahs.com',
        text: 'hdghjghjdkjd'
    }); // Methods to Send Data from client to serve

});
socket.on('disconnect',function() {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(data){
console.log('New Message',data);
}); // Listening newMessage emit event of server