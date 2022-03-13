const express = require('express');
const cors = require("cors");

const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

const port = 4000;

app.get('/', (req, res) => {
  res.send('Product API');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});