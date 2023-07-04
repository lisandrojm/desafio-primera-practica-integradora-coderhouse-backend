/* ************************************************************************** */
/* /src/models/carts.js - Mongoose-definición de un esquema de carrito y 
creación de un modelo correspondiente */
/* ************************************************************************** */

/* Importar las clases Schema y model del módulo 'mongoose'. */
const { Schema, model } = require('mongoose');

/* Definir el nombre de la colección de la base de datos*/
const collectionName = 'messages';

/* Definir el esquema de mensaje */
const messageSchema = new Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
});

/* Crear el modelo del mensaje */
const Message = model('Message', messageSchema);

/* Exportar el modelo y el nombre de la colección */
module.exports = {
  Message,
  collectionName,
};
