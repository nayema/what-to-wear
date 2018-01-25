const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/all', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM clothes_temperature_mappings')
  res.send(rows)
})

router.post('/add', async (req, res) => {
  const { rows } = await db.query(
    'INSERT INTO clothes_temperature_mappings(min_temp, max_temp, set_of_clothes) VALUES ($1, $2, $3)',
    [req.body.minTemp, req.body.maxTemp, req.body.setOfClothes]
  )
  res.send(rows)
})

module.exports = router
