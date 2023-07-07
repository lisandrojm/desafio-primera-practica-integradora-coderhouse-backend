/* ************************************************************************** */
/* /src/components/handlebars/handlebarsServices/handlebarsServices.js -
Servicios de handlebars */
/* ************************************************************************** */

/* Importar la conexión a la base de datos */
const { connection } = require('../../../config/mongo');

/* Definir la clase HandlebarsServices */
class HandlebarsServices {
  /* Función para obtener la página de inicio */
  getHome = async (res) => {
    try {
      /* Obtener los productos de la colección 'products' */
      const productos = await this.getCollectionData('products');

      return res.status(200).render('home', { success: true, title: 'Home', productos, style: 'index.css' });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error Handlebars' });
    }
  };

  /* Función para obtener los productos en tiempo real */
  getRealTimeProducts = async (res) => {
    try {
      /* Obtener los productos de la colección 'products' */
      const productos = await this.getCollectionData('products');

      return res.status(200).render('realTimeProducts', { success: true, title: 'Real Time Products', productos, style: 'index.css' });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error Handlebars' });
    }
  };

  getChat = async (res) => {
    try {
      return res.status(200).render('chat', { success: true, title: 'Chat', style: 'index.css' });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Error Handlebars' });
    }
  };

  /* Función auxiliar para obtener los datos de una colección */
  getCollectionData = async (collectionName) => {
    /* Obtener la conexión a la base de datos */
    const database = connection;
    const collection = database.collection(collectionName);
    /* Obtener los productos de la colección */
    const productos = await collection.find().toArray();

    return productos;
  };
}

/* Exportar una instancia de la clase HandlebarsServices */
module.exports = new HandlebarsServices();
