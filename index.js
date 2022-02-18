const express = require('express');
const app = express();
const path = require('path');
const reddintData = require('./data.json');

const port_num = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  console.log('get root');
  res.render('main/home');
});

app.get('/cats', (req, res) => {
  console.log('get cats');
  cats = ['Luna', 'Milo', 'Oliver', 'Leo', 'Loki', 'Bella', 'Charlie', 'Willow'];
  res.render('main/cats', { cats });
});

app.get('/dogs', (req, res) => {
  console.log('get dogs');
  res.send('<h1>Get Dogs</h1>');
});

app.get('/random', (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  console.log(`get random = ${number}`)
  res.render('main/random', { number });
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
  const data = reddintData[method];
  console.log(data)
  if (data)
    res.render('main/reddintData', { ...data });
  else
    res.render('main/notFound', { method });
});

app.listen(port_num, () => {
  console.log(`Listening on port ${port_num}`);
});
