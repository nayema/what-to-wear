const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/all', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM clothes_temperature_mappings')
  res.send(rows)
})

module.exports = router
