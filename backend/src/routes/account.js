const express = require('express')
const passport = require('passport')
const User = require('../models/user')

const router = express.Router()

/* GET home page. */
router.get('/session', (req, res) => {
  res.send(req.session)
})

// router.post('/', async (req, res, next) => {
//   const userToCreate = {
//     name: req.body.name,
//     email: req.body.email,
//   }
//   const user = new User(userToCreate)
//   await user.setPassword(req.body.password)
//   await user.save()
//   res.sendStatus(200)
// })
router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    const user = await User.register({ name, email }, password)
    res.send(user)
  } catch (e) {
    next(e)
  }
})
router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', (req, res) => {
  req.logout()
  res.send(true)
})
module.exports = router
