var socket = io();

socket.on('connect', function() {
  console.log('COnnected to server');

  socket.emit('createMessage', {
    to: 'Ronaldo',
    text: 'Hello Ronaldo'
  });
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
