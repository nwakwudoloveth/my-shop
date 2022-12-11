const mongoose = require('mongoose')

// converting class into mongoose schema
const productSchema = new mongoose.Schema({
  image: String,
  price: Number,
  description: String,
})
module.exports = mongoose.model('Product', productSchema)

// class Product {
//   constructor(imageUrl, price, description) {
//     this.image = imageUrl
//     this.price = price
//     this.description = description
//   }
// }

// module.exports = Product
