require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

//6085c113d826271720f47d80

// User.findByIdAndUpdate('60888df4e1545c3554fe14db', { age: 2, name: 'Semen' }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 18 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age })
//   const count = await User.countDocuments({ age })
//   return count
// }

// updateAgeAndCount('6085c113d826271720f47d80', 99).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.estimatedDocumentCount(task)
  return count
}

deleteTaskAndCount('6088978617e5855f64fd1493').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})