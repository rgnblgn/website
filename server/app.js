const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/images', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.get('/api/tabs', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'tabHeaders.json'));
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
