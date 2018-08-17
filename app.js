const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

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
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if(errorMessage){
           console.log(errorMessage)
        }
        else{
            console.log(`It is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
        }
    });
 }
});



