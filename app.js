const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(encodedAddress, (errorMessage, results) => {
 if(errorMessage){
     console.log(errorMessage)
 } else{
    console.log(JSON.stringify(results, undefined, 2));
 }
});

// var options = {
//     url: 'https://maps.googleapis.com/maps/api/geocode/json?' + 'address=%201,3%20lombard%20street%20philadephia' +
//     '&key=' + process.env.WEATHER_APP_KEY, json: true
//   };