/* ************************************************************************** */
/* /src/components/carts/cartsServices/cartsServices.js - servicio de los carritos. */
/* ************************************************************************** */

/* Importar el modelo de carrito */
const { Cart } = require('../../../models/carts');
/* Importar el modelo de producto */
const { Product } = require('../../../models/products');

/* Definir la clase 'CartsService' */
class CartsService {
  constructor() {
    /* Verificar y crear la colección de carritos si no existe */
    this.initializeCartCollection();
  }

  /* Inicializar la colección de carritos */
  initializeCartCollection = async () => {
    try {
      /* Contar la cantidad de documentos en la colección de carritos */
      const cartCount = await Cart.countDocuments();
      /* Si no hay carritos en la colección, crear uno nuevo */
      if (cartCount === 0) {
        await Cart.create({ products: [] });
        console.log('Colección "carts" inicializada correctamente');
      }
    } catch (error) {
      console.error('Error al inicializar la colección de carritos en la base de datos', error);
    }
  };

  /* Agregar un carrito nuevo */
  addCart = async (res) => {
    try {
      /* Crear un nuevo carrito */
      const newCart = await Cart.create({ products: [] });
      const data = newCart;
      return res.status(201).json({ success: true, message: 'Nuevo carrito creado', payload: data });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error al crear el carrito' });
    }
  };

  /* Obtener los productos de un carrito por su ID */
  getCartProductById = async (cid, res) => {
    try {
      const cart = await Cart.findById(cid).populate('products.productId');
      if (!cart) {
        return res.status(404).json({ success: false, error: 'Carrito no encontrado' });
      }
      const data = cart.products;
      return res.status(200).json({ success: true, payload: data });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error al obtener los productos del carrito' });
    }
  };

  /* Agregar un producto a un carrito */
  addProductToCart = async (cid, pid, quantity, res) => {
    try {
      /* Buscar el carrito por su ID */
      const cart = await Cart.findById(cid);
      if (!cart) {
        return res.status(404).json({ success: false, error: 'Carrito no encontrado' });
      }

      /* Buscar el producto por su ID */
      const product = await Product.findById(pid);
      if (!product) {
        return res.status(404).json({ success: false, error: 'ID de Producto no encontrado' });
      }

      /* Buscar el índice del producto en el carrito */
      const productIndex = cart.products.findIndex((p) => p.productId.toString() === pid);
      /* Si el producto no existe en el carrito, agregarlo con la cantidad proporcionada (o 1 por defecto) */
      if (productIndex === -1) {
        const newProduct = {
          productId: pid,
          quantity: quantity || 1,
        };
        cart.products.push(newProduct);
      } else {
        /* Si el producto ya existe en el carrito, aumentar su cantidad en la cantidad proporcionada (o 1 por defecto) */
        cart.products[productIndex].quantity += quantity || 1;
      }

      /* Guardar los cambios realizados en el carrito */
      await cart.save();
      const data = cart;
      return res.status(200).json({ success: true, message: 'Producto agregado al carrito correctamente', payload: data });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error al agregar el producto al carrito' });
    }
  };

  /* Eliminar un producto del carrito */
  deleteProductToCart = async (cid, pid, res) => {
    try {
      /* Buscar el carrito por su ID */
      const cart = await Cart.findById(cid);
      if (!cart) {
        return res.status(404).json({ success: false, error: 'Carrito no encontrado' });
      }
      /* Buscar el índice del producto en el carrito */
      const productIndex = cart.products.findIndex((p) => p.productId.toString() === pid);
      if (productIndex === -1) {
        return res.status(404).json({ success: false, error: 'Producto no encontrado en el carrito' });
      }
      /* Eliminar el producto del carrito */
      cart.products.splice(productIndex, 1);
      /* Guardar los cambios realizados en el carrito */
      await cart.save();
      const data = cart;
      return res.status(200).json({ success: true, message: 'Producto eliminado del carrito correctamente', payload: data });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error al eliminar el producto del carrito' });
    }
  };

  /* Eliminar un carrito */
  deleteCart = async (cid, res) => {
    try {
      /* Buscar el carrito por su ID */
      const cart = await Cart.findById(cid);
      if (!cart) {
        return res.status(404).json({ success: false, error: 'Carrito no encontrado' });
      }
      /* Eliminar el carrito */
      await cart.deleteOne();
      const data = cart;
      return res.status(200).json({ success: true, message: 'Carrito eliminado correctamente', payload: data });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error al eliminar el carrito' });
    }
  };
}

/* Exportar una instancia de la clase 'CartsService' */
module.exports = new CartsService();
