const express = require('express')
const request = require('request')
const router = express.Router()

const accuWeatherApiKey = process.env.ACCUWEATHER_API_KEY
const accuWeatherRequestURL =
  'http://dataservice.accuweather.com/currentconditions/v1/55488?apikey='
  + accuWeatherApiKey
  + '&details=true'

router.get('/current-conditions', (req, res) => {
  request(accuWeatherRequestURL, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const currentConditions = JSON.parse(body)

      const currentConditionsResponse = {
        'real_feel_temperature': currentConditions[0]['RealFeelTemperature']['Metric']['Value']
      }

      res.send(currentConditionsResponse)
    }
  })
})

module.exports = router
