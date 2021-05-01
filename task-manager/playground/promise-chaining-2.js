require('../src/db/mongoose')
const Task = require('../src/models/task')


const _id = '60888d022efd934d4893aa05'

Task.findByIdAndDelete(_id).then((task) => {
  console.log(task)
  return Task.estimatedDocumentCount()
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e);
})