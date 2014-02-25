var socket = io.connect('http://localhost');

var bts = {
  me: {
    nick: ''
  }
};

// Update nick

$('.update-nick').on('click', function () {
  var nick = $('.nick').val();

  if ( ! nick ) {
    console.error('Missing nick');
  } else {
    bts.me.nick = nick;
  }
});