# DESAFÍO ENTREGABLE - Primera práctica integradora - Coderhouse/Backend

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
   git clone https://github.com/lisandrojm/desafio_primera-practica-integradora
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd desafio_primera-practica-integradora
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

## Video Test Chat


https://github.com/lisandrojm/desafio_primera-practica-integradora/assets/35199683/a8a1d3f7-b999-40e8-8875-ee5ba5a12667


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

## Dependencias

El proyecto utiliza las siguientes dependencias:

- Express.js (v4.18.2): Framework de Node.js para construir aplicaciones web.
- UUID (v9.0.0): Biblioteca para generar identificadores únicos.
- Cors (v2.8.5): Middleware para permitir peticiones HTTP entre diferentes dominios.
- Dotenv (v16.3.1): Carga variables de entorno desde un archivo `.env`.
- Express-handlebars (v7.0.7): Motor de plantillas para Express.js.
- MongoDB (v5.6.0): Driver de MongoDB para Node.js.
- Mongoose (v7.3.1): Modelado de objetos de MongoDB para Node.js.
- Multer (v1.4.5-lts.1): Middleware para manejar datos de formulario multipart/form-data.
- Socket.io (v4.6.2): Biblioteca para la comunicación en tiempo real basada en WebSockets.
- Sweetalert2 (v11.7.12): Biblioteca para mostrar mensajes y alertas personalizadas.

## DevDependencies

El proyecto utiliza las siguientes devDependencies:

- Nodemon (v2.0.22): Utilidad que monitoriza cambios en los archivos y reinicia automáticamente la aplicación.

Estas dependencias pueden ser instaladas ejecutando el comando `npm install` en el directorio del proyecto.

## Postman Collections

- En la carpeta `postman_collections`, encontrarás los archivos necesarios para importar las colecciones en Postman y realizar pruebas en el proyecto. Las colecciones proporcionan ejemplos de solicitudes HTTP para interactuar con la API y probar su funcionalidad.
