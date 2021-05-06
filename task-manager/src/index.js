const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { estimatedDocumentCount } = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('...sorry, there is maintenance work on the server. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Sever is up on port' + port)
})

const main = async () => {
  // const task = await Task.findById('6091c4a92ae6f57698c1f4b4')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('6093c182b0f25a11a859f5bd')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()

// const pet = {
//   name: 'Hal'
// }

// pet.toJSON = function () {
//   return {}
// }

// console.log(JSON.stringify(pet))


/*
//
// without middleware: new req -> run route handler
//
// with middleware:    new req -> do something -> run route handler
//

const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '4 seconds' })
  console.log(token)

  const data = jwt.verify(token, 'thisismynewcourse')
  // setTimeout(() => {
  //   const data = jwt.verify(token, 'thisismynewcourse')
  //   console.log(data)
  // }, 3000
  // )
  console.log(data)

}

myFunction()

//
*/