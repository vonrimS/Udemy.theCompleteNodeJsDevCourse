const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
  name: {
    type: String,
    required: [true, "Please type your name..."],
    trim: true
  },
  age: {
    type: Number,
    default: 18,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  },
  email: {
    type: String,
    required: [true, "Please type your email"],
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error('...check your input! It doesn\'t seem to be an email')
      }
    },
    trim: true
  },
  password: {
    type: String,
    required: [true, "Please type your password"],
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('...the password cannot contain the word "password"')
      }
    }
  }
})

module.exports = User