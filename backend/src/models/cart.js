const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const cartSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
      autopopulate: true,
    },
  ],
})

cartSchema.plugin(autopopulate)
module.exports = mongoose.model('Cart', cartSchema)
