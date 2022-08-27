const request = require('request')
const geocodeURL =
'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&include=current&key=SSXC7DMYLZE9CJNBNE4DKAUET&contentType=json'
request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else {
        const latitude = response.body.latitude
        const longitude = response.body.longitude
        console.log(latitude, longitude)
    }
})