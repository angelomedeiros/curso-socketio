module.exports = function (io) {
  io.sockets.on('connection', function (client) {
    client.emit('hello', { title: 'Bem vindo', msg: 'Você está conectado' });

    client.on('user_add', function (msg) {
      client.broadcast.emit('user_add_response', {
        title: 'Novo professor',
        msg: 'O professor ' + msg.nome + ' foi contratado!'
      })
    })

    client.on('user_remove', function (msg) {
      client.broadcast.emit('user_remove_response', {
        title: 'O professor foi removido',
        msg: 'O professor ' + msg.nome + ' foi demitido!'
      })
    })


  })
}