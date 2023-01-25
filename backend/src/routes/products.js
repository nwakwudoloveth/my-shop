const express = require('express')

const router = express.Router()
// const User = require('../models/user')
const Product = require('../models/product')

router.get('/', async function (req, res, next) {
  try {
    const products = await Product.find({})
    res.send(products)
  } catch (e) {
    res.sendStatus(404)
  }
})

// router.get('/', async function (req, res, next) {
//   try {
//     const searchResult = await Product.find({name:`${query}`})
//     res.send(searchResult)
//   } catch (e) {
//     res.sendStatus(404)
//   }
// })
router.get('/:productId', async (req, res) => {
  const product = await Product.findById(req.params.productId)

  if (product) res.send(product)
  else res.sendStatus(404)
})

router.get('/:productId/json', async (req, res) => {
  const product = await Product.findById(req.params.productId)
  res.send(product)
})

router.post('/', async function (req, res, next) {
  const { name, image, price, description, category } = req.body
  try {
    if (!name || !image || !price || !description || !category) {
      res
        .send({
          message: 'Missing fields.',
        })
        .status(400)
      return
    }
    const product = await Product.create({
      name,
      image,
      price,
      description,
      category,
    })
    res.send(product)
  } catch (e) {
    next(e)
  }
})

module.exports = router
