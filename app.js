const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        address:'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB223d-3Fd8_5v0N_v85tB5W3b91C1oI9E`,
    json: true
}, (error, response, body) => {
    if(error){
        console.log('Unable to connect to Google servers.');
    } else if(body.status === 'ZERO_RESULTS'){
        console.log('Unable to find that address');
    } else if(body.status === 'OK'){
       console.log(`Address: ${body.results[0].formatted_address}`);
       console.log(`Address: ${body.results[0].geometry.location.lat}`);
       console.log(`Address: ${body.results[0].geometry.location.lng}`);
    }
 
})

// var options = {
//     url: 'https://maps.googleapis.com/maps/api/geocode/json?' + 'address=%201,3%20lombard%20street%20philadephia' +
//     '&key=' + process.env.WEATHER_APP_KEY, json: true
//   };