/* ************************************************************************** */
/* /src/models/products.js - Mongoose-definición de un esquema de producto y 
creación de un modelo correspondiente*/
/* ************************************************************************** */

/* Importar las clases Schema y model del módulo 'mongoose'. */
const { Schema, model } = require('mongoose');

/* Definir el nombre de la colección en la base de datos */
const collectionName = 'products';

/* Definir el esquema de producto */
const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  thumbnails: { type: [String], default: ['Sin imagen'] },
});

/* Crear el modelo de producto */
const Product = model('Product', productSchema);

/* Exportar el modelo y el nombre de la colección */
module.exports = {
  Product,
  collectionName,
};
