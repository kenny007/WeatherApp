const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', hbs);
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase();
})

app.get('/', (req, res) => {
  res.render('home.hbs', 
  {
    pageTitle:'Home Page',
    welcomeMessage: 'You are welcome to our site'
  });
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle:'About Page'
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});