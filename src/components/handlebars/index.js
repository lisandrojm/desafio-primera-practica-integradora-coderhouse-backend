/* ************************************************************************** */
/* /src/components/handlebars/index.js - Contiene las rutas y controladores de los
 de handlebarsController.js. */
/* ************************************************************************** */

/* Importar el módulo de enrutador de Express */
const { Router } = require('express');

/* Importar el controlador de handlebars */
const handlebarsController = require('./handlebarsController/handlebarsController');

const router = Router();

/* Definir las rutas y asignar los controladores correspondientes */
router.get('/', handlebarsController.getChat);
router.get('/home', handlebarsController.getHome);
router.get('/realTimeProducts', handlebarsController.getRealTimeProducts);

module.exports = (app) => {
  app.use(router);
};
