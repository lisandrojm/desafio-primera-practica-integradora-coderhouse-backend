/* ************************************************************************** */
/* /src/components/carts/index.js - Contiene las rutas y controladores de  
cartsController.js. */
/* ************************************************************************** */

/* Importar el módulo de enrutador de Express */
const { Router } = require('express');

/* Importar el controlador de carrito */
const carritoController = require('./cartsController/cartsController');

module.exports = (app) => {
  /* Crear una nueva instancia del enrutador de Express */
  const router = new Router();

  /* Registrar el enrutador en la aplicación principal */
  app.use('/api/carts', router);

  /* Definir las rutas y asignar los controladores correspondientes */
  router.post('/', carritoController.addCart);
  router.get('/:cid', carritoController.getCartProductById);
  router.post('/:cid/product/:pid', carritoController.addProductToCart);
  router.delete('/:cid/product/:pid', carritoController.deleteProductToCart);
  router.delete('/:cid', carritoController.deleteCart);
};
