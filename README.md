# DESAFÍO ENTREGABLE - Clase integradora - Coderhouse/Backend

# Implementación de vista de chat en Handlebars

Este repositorio contiene la implementación de una vista en Handlebars llamada `chat.handlebars` que permite implementar un chat.

Los mensajes enviados por los usuarios se guardan en una colección llamada "messages" en MongoDB.

## Requisitos

Asegúrate de tener los siguientes requisitos instalados en tu entorno de desarrollo:

- Node.js
- MongoDB

## Instrucciones de instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/lisandrojm/desafio_clase-integradora
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd desafio_clase-integradora
   ```

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```bash
   npm install
   ```

4. Configura la conexión a la base de datos MongoDB en el archivo `.env`. Puedes copiar el archivo `.env.example` y renombrarlo a `.env`, luego actualiza los valores con tu configuración:

   ```bash
   cp .env.example .env
   ```

   Asegúrate de tener MongoDB en ejecución y la URL de conexión correcta en el archivo `.env`.

5. Inicia la aplicación con el siguiente comando:

   ```bash
   npm start
   ```

   Esto iniciará el servidor Node.js y estará escuchando en el puerto especificado en el archivo `.env`.

6. Accede a la aplicación en tu navegador web ingresando la siguiente URL:

   ```
   http://localhost:<PUERTO_DE_LA_APP>
   ```

   Asegúrate de reemplazar `<PUERTO_DE_LA_APP>` con el número de puerto especificado en el archivo `.env`.

7. Ahora podrás utilizar la vista de chat en la aplicación.

## Estructura del proyecto (directorios relevantes para el desafío)

Aquí tienes la estructura del proyecto con descripciones para cada directorio:

El proyecto sigue la siguiente estructura de directorios:

- `/src`: Contiene el archivo principal de la aplicación (`index.js`) que inicia el servidor y configura las rutas. Es el punto de entrada de la aplicación.

- `/src/components/handlebars`: Contiene los archivos relacionados con la funcionalidad de Handlebars.

  - `/src/components/handlebars/index.js`: Archivo de entrada de Handlebars que exporta los componentes relacionados.
  - `/src/components/handlebars/handlebarsController/handlebarsController.js`: Controlador de Handlebars para gestionar la lógica de negocio.
  - `/src/components/handlebars/handlebarsServices/productsServices.js`: Servicios de Handlebars para interactuar con la capa de datos relacionados con los productos.

- `/src/components/messages`: Contiene los archivos relacionados con la funcionalidad de mensajes.

  - `/src/components/messages/index.js`: Archivo de entrada de mensajes que exporta los componentes relacionados.
  - `/src/components/messages/messagesController/messagesController.js`: Controlador de mensajes para gestionar la lógica de negocio.
  - `/src/components/messages/messagesServices/messagesServices.js`: Servicios de mensajes para interactuar con la capa de datos relacionados con los mensajes.

- `/src/config`: Contiene los archivos de configuración de la aplicación.

  - `/src/config/index.js`: Archivo de configuración que exporta variables de entorno y configuraciones generales.
  - `/src/config/mongo.js`: Archivo de configuración de Mongoose para establecer la conexión a la base de datos MongoDB.

- `/src/models`: Contiene los modelos de datos de la aplicación.

  - `/src/models/messages.js`: Modelo de mensajes definido con Mongoose para representar los datos de los mensajes.

- `/src/public`: Contiene los archivos públicos de la aplicación, como estilos CSS, imágenes y scripts JavaScript.

  - `/src/public/js/chat/index.js`: Archivo de script JavaScript para gestionar la funcionalidad del chat.

- `/src/routes`: Contiene los archivos de definición de rutas de la aplicación.

  - `/src/routes/index.js`: Archivo de definición de rutas que exporta las rutas para los mensajes.

- `/src/utils/socket`: Contiene los archivos relacionados con la configuración de WebSockets.

  - `/src/utils/socket/socket.js`: Archivo de configuración de Socket.io para establecer la comunicación en tiempo real entre el cliente y el servidor.

e `/src/views/layouts`: Contiene los archivos de plantillas HTML utilizando el motor de plantillas Handlebars.

- `/src/views/layouts/chat.handlebars`: Archivo de plantilla HTML para la vista de chat.

- `/.env.example`: Archivo de ejemplo que muestra la estructura y variables de entorno requeridas para la configuración de la aplicación.
