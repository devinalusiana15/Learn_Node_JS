const geocode = require('./geocode.js')

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})