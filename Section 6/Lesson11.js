const geocode = require('./forecast.js')
const forecast = require('./geocode.js')

geocode('Boston', (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})