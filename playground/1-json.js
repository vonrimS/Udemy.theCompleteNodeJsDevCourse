const log = console.log

const fs = require('fs')
// const { parse } = require('yargs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// // log(dataBuffer.toString())
// log(data.title)

const dataBuf = fs.readFileSync('1-json.json')
const dataJSON = dataBuf.toString()
const user = JSON.parse(dataJSON)

user.name = 'Mikhail',
  user.age = 35

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)