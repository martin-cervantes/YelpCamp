const express = require('express');
const app = express();

const port_num = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('get root');
  res.send('<h1>Get Root</h1>');
});

app.get('/cats', (req, res) => {
  console.log('get cats');
  res.send('<h1>Get Cats</h1>');
});

app.get('/dogs', (req, res) => {
  console.log('get dogs');
  res.send('<h1>Get Dogs</h1>');
});

app.listen(port_num, () => {
  console.log(`Listening on port ${port_num}`);
});
