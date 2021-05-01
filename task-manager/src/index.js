const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { estimatedDocumentCount } = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.get('/users', async (req, res) => {

  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send()
  }


  // User.find({}).then((users) => {
  //   res.send(users)
  // }).catch((e) => {
  //   res.status(500).send()
  // })
})

app.get('/users/:id', async (req, res) => {
  //const _id = mongoose.Types.ObjectId(req.params.id)
  const _id = req.params.id
  try {
    const user = await User.findById(_id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
})

// challenge 

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch (err) {
    res.status(400).send(err)
  }

  // task.save().then(() => {
  //   res.status(201).send(task)
  // }).catch((e) => {
  //   res.status(400).send(e)
  // })
})

app.get('/tasks', async (req, res) => {

  try {
    const tasks = await Task.find({})
    res.status(200).send(tasks)
  } catch (err) {
    res.status(500).send()
  }

  // Task.find({}).then((tasks) => {
  //   res.send(tasks)
  // }).catch((e) => {
  //   res.status(404).send()
  // })
})

// app.get('/users/:id', (req, res) => {
//   const userID = mongoose.Types.ObjectId(req.params.id)
//   User.findById(userID).then((user) => {
//     if (!user) {
//       return res.status(404).send()
//     }
//     res.status(200).send(user)
//   }).catch((e) => {
//     res.status(500).send()
//   })
// })

app.get('/tasks/:id', async (req, res) => {
  const taskID = mongoose.Types.ObjectId(req.params.id)
  try {
    const task = await Task.findById(taskID)
    if (!task) {
      res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(500).send(e)
  }

  // Task.findById(taskID).then((task) => {
  //   if (!task) {
  //     return res.status(404).send()
  //   }
  //   res.status(200).send(task)
  // }).catch((e) => {
  //   res.status(500).send()
  // })
})


app.listen(port, () => {
  console.log('Sever is up on port' + port)
})

// const express = require('express')
// const mongoose = require('mongoose')

// const PORT = process.env.PORT || 3000

// const app = express()

// async function start(req, res, next) {
//   try {
//     await mongoose.connect('', {
//       useNewUrlParser: true,
//       useFindAndModify: false
//     })
//   } catch (err) {
//     console.error(err)
//   }
// }

// app.listen(PORT, () => {
//   console.log('Server has been started...')
// })
