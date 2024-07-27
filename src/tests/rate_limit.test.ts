import request from 'supertest'
import app from '../index'
import { logger } from '../config/winston'

jest.mock('../config/winston')

describe('Rate Limit Middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should allow requests below the rate limit', async () => {
    for (let i = 0; i < 10; i++) {
      const res = await request(app).get('/status')
      expect(res.status).toBe(200)
    }
  })

  it('should block requests exceeding the rate limit', async () => {
    for (let i = 0; i < 10; i++) {
      await request(app).get('/status')
    }

    const res = await request(app).get('/status')
    expect(res.status).toBe(429)
    expect(res.body).toEqual({ error: 'Too many requests' })
    expect(logger.warn).toHaveBeenCalledWith(
      expect.stringContaining('A rate limit has been reached from:')
    )
  })
})
