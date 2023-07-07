/* ************************************************************************** */
/* /src/components/handlebars/handlebarscController/handlebarsController.js - Controlador de handlebars */
/* ************************************************************************** */

/* Importar el servicio de handlebars */
const HandlebarsServices = require('../handlebarsServices/handlebarsServices');

/* Definir la clase HandlebarsController */
class HandlebarsController {
  /* Función para obtener la página de inicio */
  getHome = async (req, res) => {
    await HandlebarsServices.getHome(res);
  };

  /* Función para obtener los productos en tiempo real */
  getRealTimeProducts = async (req, res) => {
    await HandlebarsServices.getRealTimeProducts(res);
  };
  /* Función para obtener el chat en tiempo real */
  getChat = async (req, res) => {
    await HandlebarsServices.getChat(res);
  };
}

/* Exportar una instancia de la clase HandlebarsController */
module.exports = new HandlebarsController();
