const express = require('express');
const db = require('../database/database.js');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());

app.post('/groceries', (req, res) => {
  console.log('wakakakaka', req.body);
  db.saveGroceryItem(req.body);
  res.end();
});

app.get('/groceries', (req, res) => {
  console.log('server received get request');
  db.findGroceries((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server started and listening on port 3000');
});

