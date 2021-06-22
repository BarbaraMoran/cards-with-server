const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const serverPort = 3001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/card/', (req, res) => {
  res.json('<html><body>hello</body></html>');
});
