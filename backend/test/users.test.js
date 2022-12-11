const request = require('supertest')
const app = require('../src/app')

describe('User endpoints', () => {
  it('POST request to /api/users should create a user', async () => {
    const userToCreate = {
      name: `Somename${Date.now()}`,
      age: 27,
      bio: 'Been there. Done that.',
    }

    const createdUser = (await request(app).post('/api/users').send(userToCreate)).body

    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.bio).toBe(userToCreate.bio)
  })

  it('GET request to /users should list users', async () => {
    const userList = (await request(app).get('/api/users')).body
    const userExist = userList.length > 0

    expect(userExist).toBe(true)
  })
})
