const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://us1.locationiq.com/v1/search?key=pk.64fd43b0659ed21ae1d6bdd6479baf3b&q=' +
    address + '&format=json'
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body[0].lat,
                longitude: response.body[0].lon,
                location: response.body[0].display_name
            })
        }
    })
}
module.exports = geocode
