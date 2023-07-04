/* ************************************************************************** */
/* /src/models/carts.js - Mongoose-definición de un esquema de carrito y 
creación de un modelo correspondiente */
/* ************************************************************************** */

/* Importar las clases Schema y model del módulo 'mongoose'. */
const { Schema, model } = require('mongoose');

/* Definir el nombre de la colección de la base de datos*/
const collectionName = 'carts';

/* Definir el esquema de carrito */
const cartSchema = new Schema({
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

/* Crear el modelo de carrito */
const Cart = model('Cart', cartSchema);

/* Exportar el modelo y el nombre de la colección */
module.exports = {
  Cart,
  collectionName,
};
