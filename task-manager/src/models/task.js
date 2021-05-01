const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: [true, "Please type your description"],
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = Task