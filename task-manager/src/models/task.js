const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Please type your description"],
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

taskSchema.pre('save', async function (next) {
  const task = this
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task