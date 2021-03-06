// From this file we can init the server, then listen requisitions to the app

// import server configs
var app = require('./config/server');

// parameterize the listen port
var server = app.listen(80, function(){
	console.log('Servidor online');
});

// SocketIO implementation (1º: encapsulate the app.lesten in a var "server")
var io = require('socket.io').listen(server); // even http requisition or websoekts requisition are received and interpreted 

// criar uma var global par o IO
app.set('io', io);

// Criar a conexão por websocket | io.on() = estamos escutando eventos de conexao
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('User desconectou');
		
	})
});
