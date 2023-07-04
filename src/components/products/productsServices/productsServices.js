/* ************************************************************************** */
/* /src/components/products/productsServices/productsServices.js -
 controlador de los productos. */
/* ************************************************************************** */

/* Importar el modelo de producto */
const { Product } = require('../../../models/products');

/* Definir la clase 'ProductsServices' */
class ProductsServices {
  /* Obtener todos los productos */
  getAllProducts = async (limit, res) => {
    try {
      /* Obtener el límite de productos a mostrar de los parámetros de consulta */

      let query = Product.find();

      if (limit) {
        /* Limitar la cantidad de productos según el límite especificado */
        query = query.limit(parseInt(limit));
      }

      /* Ejecutar la consulta y obtener los productos */
      const products = await query.exec();

      const data = products;
      /* Enviar una respuesta exitosa con los productos obtenidos */
      return res.status(200).json({ status: 'success', payload: data });
    } catch (error) {
      /* Enviar una respuesta de error en caso de producirse un error al obtener los productos */
      return res.status(500).json({ status: 'error', error: 'Error al obtener los productos' });
    }
  };

  addProduct = async (payload, images, res, req) => {
    try {
      /* Obtener los datos del producto de los campos de payload */
      const { title, description, code, price, stock, category } = payload;

      if (!title || !description || !code || !price || !stock || !category) {
        /* Enviar una respuesta de error si faltan campos obligatorios */
        return res.status(500).json({ status: 'error', error: 'Faltan campos obligatorios' });
      }

      /* Verificar si ya existe un producto con el mismo código */
      const existingProduct = await Product.findOne({ code: code });

      if (existingProduct) {
        /* Enviar una respuesta de error si ya existe un producto con el mismo código */
        return res.status(400).json({ status: 'error', error: 'Ya existe un producto con el mismo código' });
      }

      /* Crear el objeto del nuevo producto */
      const newProduct = new Product({
        title,
        description,
        code,
        price,
        stock,
        category,
        thumbnails: images && images.length > 0 ? images.map((image) => image.filename) : ['Sin imagen'],
      });

      /* Guardar el nuevo producto en la base de datos */
      await newProduct.save();
      /* Emitir un evento de 'newProduct' a través de socket.io */
      req.app.io.emit('newProduct', newProduct);

      const data = newProduct;
      /* Eviar una respuesta exitosa con un mensaje de éxito */
      return res.status(201).json({ status: 'success', message: 'Producto agregado correctamente', payload: data });
    } catch (error) {
      /* Enviar una respuesta de error en caso de producirse un error al agregar el producto */
      return res.status(500).json({ status: 'error', error: 'Error al agregar el producto' });
    }
  };

  /* Obtener un producto por ID */
  getProductById = async (pid, res) => {
    try {
      /* Buscar el producto por su ID en la base de datos */
      const product = await Product.findById(pid);

      if (!product) {
        /* Enviar una respuesta de error si el producto no se encuentra */
        return res.status(404).json({ status: 'error', error: 'Producto no encontrado' });
      }

      const data = product;
      /* Enviar una respuesta exitosa con el producto encontrado */
      return res.status(200).json({ status: 'success', payload: data });
    } catch (error) {
      /* Enviar una respuesta de error en caso de producirse un error al obtener el producto */
      return res.status(500).json({ status: 'error', error: 'Error al obtener el producto' });
    }
  };

  /* Actualizar un producto */
  updateProduct = async (pid, updateFields, res, req) => {
    try {
      /* Obtener los campos de actualización de la solicitud */
      const allowedFields = ['title', 'description', 'code', 'price', 'stock', 'category'];

      const invalidFields = Object.keys(updateFields).filter((field) => !allowedFields.includes(field));
      /* Filtrar los campos de actualización que no están permitidos */

      if (invalidFields.length > 0) {
        /* Enviar una respuesta de error si se intenta modificar campos no permitidos */
        return res.status(400).json({ status: 'error', error: `Los siguientes campos no se pueden modificar: ${invalidFields.join(', ')}` });
      }

      /* Buscar el producto por su ID y actualizar los campos */
      const updatedProduct = await Product.findByIdAndUpdate(pid, updateFields, { new: true });

      if (!updatedProduct) {
        /* Enviar una respuesta de error si el producto no se encuentra */
        return res.status(404).json({ status: 'error', error: 'Producto no encontrado' });
      }
      /* Emitir un evento de 'updateProduct' a través de socket.io */
      req.app.io.emit('updateProduct', updatedProduct);

      const data = updatedProduct;
      /* Enviar una respuesta exitosa con un mensaje de éxito */
      return res.status(200).json({ status: 'success', message: 'Producto actualizado correctamente', payload: data });
    } catch (error) {
      /* Enviar una respuesta de error en caso de producirse un error al actualizar el producto */
      return res.status(500).json({ status: 'error', error: 'Error al actualizar el producto' });
    }
  };

  /* Eliminar un producto */
  deleteProduct = async (pid, res, req) => {
    try {
      /* Buscar el producto por su ID y eliminarlo */
      const deletedProduct = await Product.findByIdAndDelete(pid);

      if (!deletedProduct) {
        /* Enviar una respuesta de error si el producto no se encuentra */
        return res.status(404).json({ status: 'error', error: 'Producto no encontrado' });
      }

      /* Emitir un evento de 'deleteProduct' a través de socket.io */
      req.app.io.emit('deleteProduct', pid);

      const data = deletedProduct;
      /* Enviar una respuesta exitosa con un mensaje de éxito */
      return res.status(200).json({ status: 'success', message: 'Producto eliminado correctamente', payload: data });
    } catch (error) {
      /* Enviar una respuesta de error en caso de producirse un error al eliminar el producto */
      return res.status(500).json({ status: 'error', error: 'Error al eliminar el producto' });
    }
  };
}

/* Exportar una instancia de la clase 'ProductsServices' */
module.exports = new ProductsServices();
