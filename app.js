const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD7DsngSv3MQvUv_4EOAWGql-Zyu0LGT08&address=%2013%20lombard%20street%20philadephia',
    json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
})