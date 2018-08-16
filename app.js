const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=%2013%20lombard%20street%20philadephia',
    json: true
}, (error, response, body) => {
  console.log(body);
})