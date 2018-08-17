const request = require('request');

var getWeather = (lat, lng, callback) => {
   request({
    url: `https://api.darksky.net/forecast/902caa11fa79dc5b14191836ab8d3592/${lng},${lat}`,
    json: true
}, (error, response, body) => {
    if(!error && response.statusCode === 200){
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    }
    else {
        callback('Unable to fetch weather.');
    }
}) 
}
//lng 39.472619
//lat -0.367398
module.exports.getWeather = getWeather;

