const express = require('express')
const request = require('request')
const router = express.Router()

const accuWeatherApiKey = process.env.ACCUWEATHER_API_KEY
const accuWeatherRequestURL =
  'http://dataservice.accuweather.com/currentconditions/v1/55488?apikey='
  + accuWeatherApiKey
  + '&details=true'
  + '&metric=true'

router.get('/current-conditions', (req, res) => {
  request(accuWeatherRequestURL, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let weatherData = JSON.parse(body)
      res.send(weatherData)
    }
  })
})

module.exports = router
