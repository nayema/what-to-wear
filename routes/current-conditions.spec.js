import request from 'supertest'

import app from '../app'

describe('current conditions route', () => {
  it('gets current conditions data from AccuWeather API', async () => {
    const response = await request(app)
      .get('/current-conditions')

    expect(response.statusCode).toBe(200)
    const currentConditions = response.body
    expect(currentConditions).toBeDefined()
  })
})
