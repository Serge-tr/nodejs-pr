const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  let now = new Date().toString();

  console.log(now);
  fs.appendFile('server.js', now + '\n');
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
Tue May 16 2017 15:58:49 GMT+0300 (RTZ 2 (зима))
Tue May 16 2017 15:58:51 GMT+0300 (RTZ 2 (зима))
Tue May 16 2017 15:58:56 GMT+0300 (RTZ 2 (зима))
Tue May 16 2017 15:58:56 GMT+0300 (RTZ 2 (зима))
Tue May 16 2017 15:58:57 GMT+0300 (RTZ 2 (зима))
