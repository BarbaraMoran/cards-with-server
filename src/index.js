const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

const serverPort = 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const serverStaticPath = './public';
app.use(express.static(serverStaticPath));

const serverStaticPath2 = './static';
app.use(express.static(serverStaticPath2));

app.get('/card/:id', (req, res) => {
  const data = {
    name: 'Maria',
    job: 'Maria',
    photo: 'Maria',
    linkedin: 'Maria',
    github: 'Maria',
    email: 'Maria',
    phone: 'Maria',
    palette: 'Maria',
  };
  res.render('pages/card', data);
});

app.post('/card/', (req, res) => {
  const response = {};
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
    response.cardURL = '/card/1';
  }
  res.json(response);
});

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
