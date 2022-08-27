const request = require('request')
const url = 'https://us1.locationiq.com/v1/search?key=pk.64fd43b0659ed21ae1d6bdd6479baf3b&q=California&format=json'

const forecast = (latitude, longitude, callback) => {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&include=current&key=SSXC7DMYLZE9CJNBNE4DKAUET&contentType=json' + latitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else {
            callback(undefined, response.body.currentConditions.conditions + ' It is currently ' + response.body.currentConditions.temp + ' degress out.')
        }
    })
}

module.exports = forecast