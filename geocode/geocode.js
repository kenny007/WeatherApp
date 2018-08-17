const request = require('request');

var geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB223d-3Fd8_5v0N_v85tB5W3b91C1oI9E`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Google servers.');
        } else if(body.status === 'ZERO_RESULTS'){
           callback('Unable to find that address');
        } else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports.geocodeAddress = geocodeAddress