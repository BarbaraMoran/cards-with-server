const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
const serverPort = 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

{
  /*
CREAR SERVIDOR DE ESTÁTICOS
- crear carpeta public (nombrada por convención) e incluir todo lo que tengo en la carpeta docs
- nueva variable con la direccion del servidor de estáticos (./public)
- server.use(express.static(./public))
 */
}
const serverStaticPath = './public';
app.use(express.static(serverStaticPath));

//añadir app.get (solo plantemaiento)
app.get('/card/:id', (req, res) => {});

app.post('/card/', (req, res) => {
  const response = {};
  //comprobar el resto de parámetros
  if (req.body.name === '') {
    response.success = false;
    response.error = 'Debes rellenar el nombre';
  } else if (req.body.job === '') {
    response.success = false;
    response.error = 'Debes rellenar el puesto';
  } else if (req.body.photo === '') {
    response.success = false;
    response.error = 'Debes rellenar la imagen';
  } else if (req.body.email === '') {
    response.success = false;
    response.error = 'Debes rellenar el email';
  } else if (req.body.linkedin === '') {
    response.success = false;
    response.error = 'Debes rellenar el linkedin';
  } else if (req.body.github === '') {
    response.success = false;
    response.error = 'Debes rellenar el github';
  } else if (req.body.phone === '') {
    response.success = false;
    response.error = 'Debes rellenar el teléfono';
  } else {
    response.success = true;
    response.cardURL = 'mi_card_url';
  }
  res.json(response);
});

//añadir la ruta * para que pase por aqui si todo falla
app.get('*', (req, res) => {
  const notFoundFileRelativePath = '../static/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});

{
  /*
SUBIR LA WEB A HEROKU (MOTOR DE PLANTILLAS)
- solo una integrante
- abrir cuenta en heroku (lenguaje ppal node.js)
- instalamos en nuestro local la app de heroku
  $ sudo snap install --classic heroku
 */
}
