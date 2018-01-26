import request from 'supertest'

import app from '../app'

describe('current conditions route', () => {
  it('retrieves real feel temperature in metric', async () => {
    const response = await request(app)
      .get('/current-conditions')

    expect(response.statusCode).toBe(200)
    const currentConditions = response.body
    expect(typeof currentConditions['real_feel_temperature']).toBe('number')
  })
})
