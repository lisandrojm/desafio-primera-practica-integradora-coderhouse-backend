/* ************************************************************************** */
/* /src/components/carts/cartsController/cartsController.js - controlador de los carritos. */
/* ************************************************************************** */

/* Importar el servicio de carritos */
const cartsService = require('../cartsServices/cartsServices');

/* Definir la clase 'CartsController' */
class CartsController {
  /* Agregar un carrito */
  addCart = async (req, res, next) => {
    await cartsService.addCart(res);
  };

  /* Obtener los productos de un carrito por su ID */
  getCartProductById = async (req, res, next) => {
    const { cid } = req.params;
    await cartsService.getCartProductById(cid, res);
  };

  /* Agregar un producto a un carrito */
  addProductToCart = async (req, res, next) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    await cartsService.addProductToCart(cid, pid, quantity, res);
  };

  /* Eliminar un producto del carrito */
  deleteProductToCart = async (req, res, next) => {
    const { cid, pid } = req.params;
    await cartsService.deleteProductToCart(cid, pid, res);
  };

  /* Eliminar un carrito */
  deleteCart = async (req, res, next) => {
    const { cid } = req.params;
    await cartsService.deleteCart(cid, res);
  };
}

/* Exportar una instancia de la clase 'CartsController' */
module.exports = new CartsController();
