var socket = io();
socket.on('connect',function() {
    console.log('Connected to server');

    
});
socket.on('disconnect',function() {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(data){
    var li = $('<li></li>');
    li.text(`${data.from} : ${data.text}`);
    $('#messages').append(li);
}); // Listening newMessage emit event of server



// socket.emit('createMessage',{
//         from: 'saurav',
//         text: 'Hi There'
//     }, function(data) {
//         console.log('Got it',data);
//     }); // Methods to Send Data from client to serve


$('#message-form').on('submit', function(e) {
    e.preventDefault();
    var text = $('[name=message]').val();
    var from = 'saurav';

    socket.emit('createMessage',{
        from,
        text
    }, function(data) {
        console.log('Got it',data);
    }); // Methods to Send Data from client to serve

})
