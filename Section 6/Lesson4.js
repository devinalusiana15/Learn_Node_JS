const request = require('request')

const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&include=current&key=SSXC7DMYLZE9CJNBNE4DKAUET&contentType=json'
request({url: url}, (error, response) => {
    // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body)
    // Will print the current temperature to the console
    console.log(data.currentConditions.temp)
    console.log(data)
})