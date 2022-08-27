const request = require('request')

const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&include=current&key=SSXC7DMYLZE9CJNBNE4DKAUET&contentType=json'
request({url: url, json: true}, (error, response) => {
    console.log(response.body.currentConditions.conditions + ' It is currently ' +
        response.body.currentConditions.temp + ' degrees out.')
})