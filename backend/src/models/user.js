const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

class User {
  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  get profile() {
    return `
# ${this.name} (${this.age})
Bio: ${this.bio}
    `
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter. You can't override it with ${newValue}.`)
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
