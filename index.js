const express = require('express');
const app = express();
const path = require('path');

const port_num = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  console.log('get root');
  res.render('main/home');
});

app.get('/cats', (req, res) => {
  console.log('get cats');
  res.send('<h1>Get Cats</h1>');
});

app.get('/dogs', (req, res) => {
  console.log('get dogs');
  res.send('<h1>Get Dogs</h1>');
});

app.get('/random', (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.render('main/random', {number: number});
});

app.get('/search', (req, res) => {
  console.log(req.query);
  const {q} = req.query;

  if (!q)
    res.send('</h1>Nothing found if nothing search</h1>');

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
