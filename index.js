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

app.get('/search', (req, res) => {
  console.log(req.query);
  const {q} = req.query;
  res.send(`<h1>Searching for ${q}</h1>`);
});

app.get('/:controller/:method', (req, res) => {
  console.log(req.params);
  const {controller, method} = req.params;
  res.send(`<h1>Controller: ${controller}<br>Method: ${method}</h1>`);
});

app.listen(port_num, () => {
  console.log(`Listening on port ${port_num}`);
});
