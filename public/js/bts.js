var socket = io.connect('http://localhost');

var bts = {
  messages: [],
  
  addMessage: function (msg) {
    var message = $('<div><p></p></div>');

    message.find('p').text(msg);

    $('.messages').append(message);
  },
  
  me: {
    nick: ''
  }
};

socket.on('message', function (msg) {
  console.log(msg);
  bts.addMessage(msg);
});



// Update nick

$('.update-nick').on('click', function () {
  var nick = $('.nick').val();

  if ( ! nick ) {
    console.error('Missing nick');
  } else {
    bts.me.nick = nick;
  }
});