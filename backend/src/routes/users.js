const express = require('express')

const router = express.Router()
const User = require('../models/user')
const Product = require('../models/product')

router.get('/initialise', async function (req, res) {
  const shoe = new Product({
    name: 'shoe',
    image: 'https://picsum.photos/200',
    price: 1500,
    description: 'This is a good shoe',
  })
  shoe.save()

  const mariana = new User({ name: 'mariana', email: 'mariana@gmail.com' })
  await mariana.setPassword('test')
  await mariana.save()
  const loveth = new User({ name: 'Loveth', email: 'loveth@gmail.com' })
  await loveth.setPassword('test')
  await loveth.save()
  const zeynep = new User({ name: 'Zeynep', email: 'Zeynep@gmail.com' })
  await zeynep.setPassword('test')
  await zeynep.save()
  // zeynep.addToCart(shoe)
  zeynep.list(shoe)
  loveth.list(shoe)
  mariana.list(shoe)
  res.sendStatus(200)
})
// get users Request
router.get('/', async function (req, res, next) {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.sendStatus(404)
  }
})

// post request
router.post('/', async function (req, res, next) {
  const { name, email, password } = req.body
  try {
    if (!email || !name || !password) {
      res
        .send({
          message: 'Missing fields.',
        })
        .status(400)
      return
    }
    const user = await User.create({
      name,
      email,
      password,
    })
    res.send(user)
  } catch (e) {
    next(e)
  }
})

// update a user
router.patch('/:id', async function (req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
    })
    res.send(user)
  } catch (e) {
    next(e)
  }
})

// delete a user
router.delete('/:id', async function (req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})

module.exports = router
