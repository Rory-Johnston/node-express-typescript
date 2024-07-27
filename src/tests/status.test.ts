import request from 'supertest'
import app from '../index'

describe('GET /status', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/status')
    expect(res.status).toBe(200)
  })
})
