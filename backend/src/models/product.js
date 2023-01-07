const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

// converting class into mongoose schema
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  category: String,
})
productSchema.plugin(autopopulate)
module.exports = mongoose.model('Product', productSchema)

// class Product {
//   constructor(imageUrl, price, description) {
//     this.image = imageUrl
//     this.price = price
//     this.description = description
//   }
// }

// module.exports = Product
