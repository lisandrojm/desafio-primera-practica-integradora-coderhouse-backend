# Desafio_clase-integradora

# Implementación de vista de chat en Handlebars

Este repositorio contiene la implementación de una vista nueva en Handlebars llamada `chat.handlebars`, que permite implementar un chat. Los mensajes enviados por los usuarios se guardarán en una colección llamada "messages" en MongoDB.

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

## Estructura del proyecto

El proyecto sigue la siguiente estructura de directorios:

- `views/`: Contiene los archivos de las vistas implementadas en Handlebars, incluyendo `chat.handlebars`.
- `public/`: Directorio público que almacena archivos estáticos (CSS, JS, imágenes, etc.) utilizados en la aplicación.
- `routes/`: Contiene las rutas de la aplicación, incluyendo la lógica para guardar los mensajes en la base de datos.
- `models/`: Contiene los modelos de datos utilizados en la aplicación, incluyendo el modelo para la colección "messages".
- `controllers/`: Contiene los controladores de la aplicación, que manejan la lógica de negocio y las interacciones entre las rutas y los modelos de datos.
- `app.js`: Archivo principal de la aplicación que configura y ejecuta el servidor Node.js.
