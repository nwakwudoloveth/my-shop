const express = require('express')

const Cart = require('../models/cart')

const router = express.Router()

router.get('/items', async function (req, res, next) {
  // eslint-disable-next-line no-underscore-dangle
  const cart = await Cart.findOne({ owner: req.user._id })
  res.send(cart)
})

// eslint-disable-next-line func-names, consistent-return
router.post('/items', async function (req, res, next) {
  if (!req.user) {
    return res.sendStatus(401)
  }
  if (!req.user.cart) {
    // eslint-disable-next-line no-underscore-dangle
    const cart = await Cart.create({ owner: req.user._id })
    req.user.cart = cart
    req.user.save()
  }
  const { productId } = req.body
  try {
    if (!productId) {
      return res
        .send({
          message: 'no item.',
        })
        .status(400)
    }
    req.user.cart.items.push(productId)
    req.user.cart.save()
    // eslint-disable-next-line no-underscore-dangle
    const updatedCart = await Cart.findOne({ owner: req.user._id })
    res.send(updatedCart)
  } catch (e) {
    next(e)
  }
})

router.delete('/items/:productId', async function (req, res, next) {
  try {
    // await Cart.findByIdAndDelete(req.body.productId)
    // eslint-disable-next-line no-underscore-dangle
    await Cart.findOneAndUpdate({ owner: req.user._id }, { $pull: { items: req.params.productId } })
    // req.user.cart.items.pull(req.body.productId)
    // req.user.cart.save()
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})

module.exports = router
