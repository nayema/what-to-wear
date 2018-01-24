const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'what_to_wear'
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
