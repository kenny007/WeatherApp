// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs.options({
//     a:{
//         demand:true,
//         alias:'address',
//         address:'Address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help','h')
// .argv;

// var encodedAddress = encodeURIComponent(argv.address);

// geocode.geocodeAddress(encodedAddress, (errorMessage, results) => {
//  if(errorMessage){
//      console.log(errorMessage)
//  } else{
//     console.log(JSON.stringify(results, undefined, 2));
//  }
// });

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/902caa11fa79dc5b14191836ab8d3592/39.472619,-0.367398',
    json: true
}, (error,response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature)
    }
    else {
        console.log('Unable to fetch weather.');
    } 

})

