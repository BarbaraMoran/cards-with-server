const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const serverPort = 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//añadir app.get (solo plantemaiento)
app.get('/card/:id', (req, res) => {});

app.post('/card/', (req, res) => {
  const response = {};
  //comprobar el resto de parámetros
  if (req.body.name === undefined) {
    response.success = false;
    response.error = 'Mising name parameter';
  } else {
    response.success = true;
    response.cardURL = 'mi_card_url';
  }
  res.json(response);
});

//añadir la ruta * para que pase por aqui si todo falla
app.get('*', (req, res) => {});

{
  /*
CREAR SERVIDOR DE ESTÁTICOS
- crear carpeta public (nombrada por convención) e incluir todo lo que tengo en la carpeta docs
- nueva variable con la direccion del servidor de estáticos (./public)
- server.use(express.static(./public))
 */
}

{
  /*
SUBIR LA WEB A HEROKU (MOTOR DE PLANTILLAS)
- solo una integrante
- abrir cuenta en heroku (lenguaje ppal node.js)
- instalamos en nuestro local la app de heroku
  $ sudo snap install --classic heroku
 */
}
