var socket = io();
socket.on('connect',function() {
    var params = $.deparam(window.location.search);
    socket.emit('join',params,function(err){
        if(err) {
            alert(err);
            window.location.href = '/';
        } else {
            console.log('No error');
        }
    });
    
});
socket.on('disconnect',function() {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(data){
    var li = $('<li></li>');
    li.text(`${data.from} : ${data.text}`);
    $('#messages').append(li);
}); // Listening newMessage emit event of server


socket.on('newLocationMessage', function(data){
    var li = $('<li></li>');
    var a = $('<a target="_blank"a>My Current Location</a>');
        li.text(`${data.from} : `);
        a.attr('href',data.url);
        li.append(a);
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
        $('[name=message]').val('');
    }); // Methods to Send Data from client to serve

})

var locationButton = $('#send-location');

locationButton.on('click', function() {
if(!navigator.geolocation){
    return alert('Geolocation not supported by your browser')
}

navigator.geolocation.getCurrentPosition (function(position){
    socket.emit('createLocationMessage', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
    
},function(){
    alert('unable to fetch location')
})
});