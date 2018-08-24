const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({name:'Kehinde', likes: [
      'hiking', 'football', 'liverpool'
  ]
  });
})

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request'
    })
})

app.listen(3000);