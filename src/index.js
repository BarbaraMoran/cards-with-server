const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const serverPort = 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.post('/card/', (req, res) => {
  res.json('Esta es la respuesta del servidor');
});
