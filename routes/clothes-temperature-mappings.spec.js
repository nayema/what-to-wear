import request from 'supertest'

import app from '../app'
import db from '../db'

describe('clothes temperature mappings route', () => {
  beforeEach(async () => {
    await db.query('TRUNCATE clothes_temperature_mappings')
  })

  it('gets all of the clothes temperature mappings', async () => {
    await db.query(
      'INSERT INTO clothes_temperature_mappings (min_temp, max_temp, set_of_clothes) VALUES (0, 10, \'Some set of clothes\')')

    const response = await request(app).get('/all')

    expect(response.statusCode).toBe(200)
    const clothesTemperatureMappings = response.body
    expect(clothesTemperatureMappings[0]).toHaveProperty('min_temp', 0)
    expect(clothesTemperatureMappings[0]).toHaveProperty('max_temp', 10)
    expect(clothesTemperatureMappings[0]).toHaveProperty('set_of_clothes', 'Some set of clothes')
  })

  it('adds a new clothes temperature mapping', async () => {
    const clothesTemperatureMapping = { minTemp: 0, maxTemp: 10, setOfClothes: 'Some set of clothes' }

    const response = await request(app)
      .post('/add')
      .set('Content-Type', 'application/json')
      .send(clothesTemperatureMapping)

    expect(response.statusCode).toBe(200)
    const clothesTemperatureMappings = response.body
    expect(clothesTemperatureMappings[0]).toHaveProperty('min_temp', 0)
    expect(clothesTemperatureMappings[0]).toHaveProperty('max_temp', 10)
    expect(clothesTemperatureMappings[0]).toHaveProperty('set_of_clothes', 'Some set of clothes')
  })
})
