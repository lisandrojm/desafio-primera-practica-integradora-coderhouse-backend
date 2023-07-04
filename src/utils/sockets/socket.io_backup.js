/* ************************************************************************** */
/* /src/utils/sockets/socket.io.js - configuración de websockets */
/* ************************************************************************** */

/*  Importa el módulo 'socket.io' */
const socketIO = require('socket.io');

/* Define una función llamada configureSocket que acepta un parámetro 'server' */
function configureSocket(server) {
  /* Crea una instancia de socket.io pasando el objeto 'server' como argumento */
  const io = socketIO(server);

  /* Escucha el evento 'connection' cuando un cliente se conecta al socket */
  io.on('connection', (socket) => {
    /*      Imprime en la consola el mensaje 'Cliente conectado' */
    console.log('Cliente conectado');

    /* Escucha el evento 'newProduct' cuando un cliente envía un nuevo producto */
    socket.on('newProduct', (product) => {
      /* Emite el evento 'newProduct' a todos los clientes conectados con los datos del producto */
      io.emit('newProduct', product);
    });

    /* Escucha el evento 'updateProduct' cuando un cliente actualiza un producto */
    socket.on('updateProduct', (product) => {
      /* Emite el evento 'updateProduct' a todos los clientes conectados con los datos del producto */
      io.emit('updateProduct', product);
    });

    /* Escucha el evento 'deleteProduct' cuando un cliente elimina un producto */
    socket.on('deleteProduct', (productId) => {
      /*Emite el evento 'deleteProduct' a todos los clientes conectados con el ID del producto */
      io.emit('deleteProduct', productId);
    });

    /* Escucha el evento 'disconnect' cuando un cliente se desconecta del socket */
    socket.on('disconnect', () => {
      /* Imprime en la consola el mensaje 'Cliente desconectado' */
      console.log('Cliente desconectado');
    });
  });

  /* Devuelve la instancia de socket.io */
  return io;
}

module.exports = configureSocket;
