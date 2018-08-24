const request = require('request');

var geocodeAddress = (address) => {
   
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB223d-3Fd8_5v0N_v85tB5W3b91C1oI9E`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to Google servers.');
            } else if(body.status === 'ZERO_RESULTS'){
               reject('Unable to find that address');
            } else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })
    })
}

geocodeAddress('000000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage);
});