const express = require('express')
const User = require('../models/user')

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await User.find(query).catch(error => console.log('Users not found, error: ', error)))
})

/* GET initialize */
router.get('/initialize', async (req, res) => {
  const mihri = await User.create({ name: 'mihri', age: 35 })
  const armagan = await User.create({ name: 'armagan', age: 36 })

  const steve = await User.create({ name: 'steve', age: 21 })
  steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

  steve.greet(mihri)
  steve.greet(armagan)

  console.log(steve)
  res.sendStatus(200)
})

/* POST user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})

module.exports = router
