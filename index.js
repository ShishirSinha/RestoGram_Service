const express = require('express');
const bodyParser = require('body-parser');
require('./src/app-config/db-connection')();
require('./src/models/user');
require('./src/models/post');
const app = express();
const PORT = 3000;
const routes = require('./src/routes/routes');
app.use(routes);
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello RestoGram_Service !');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});