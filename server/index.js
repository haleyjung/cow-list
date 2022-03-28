require("dotenv").config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

const { saveCow, getCow } = require('./db.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/api/cows', (req, res) => {
  getCow((err, data) => {
    if (err) {
      res.status(500).send('Server failed to fetch cows:', err);
    } else {
      console.log('sending cow data to client...');
      res.status(200).send(data);
    }
  });
});

app.post('/api/cows', (req, res) => {
  // console.log('server received:', req.body)
  saveCow(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('success!')
      res.status(201).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
