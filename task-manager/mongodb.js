// CRUD

//210487k0T2021

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
//console.log(id.getTimestamp())

//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // ----> update

  // db.collection('users').updateOne({
  //   _id: new ObjectID('6082f8fb326d3f3bb0788eea')
  // }, {
  //   $set: {
  //     name: 'Alberto Rodrigo'
  //   },
  //   $inc: {
  //     age: 36
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // ----> update many 

  // db.collection('tasks').updateMany({
  //   completed: true
  // }, {
  //   $set: { completed: false }
  // }).then((result) => {
  //   console.log(result.modifiedCount)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // ----> deleteMany

  // db.collection('users').deleteMany({
  //   age: 35
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })


  // ----> deleteOne
  db.collection('tasks').deleteOne({
    description: 'Get fired'
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  // db.collection('users').findOne({ _id: new ObjectID("608342dec8ed025a4ce1c5d1") }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 35 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({ age: 35 }).count((error, users) => {
  //   console.log(users)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID("60834fad9b542843bccd9cc4") }, (error, task) => {
  //   if (error) {
  //     return console.log('Unable to fetch such task')
  //   }
  //   console.log(task)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   console.log(tasks)
  // })


  // db.collection('users').insertOne({
  //   //_id: id,
  //   name: " Georgy",
  //   age: 31
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)

  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   },
  //   {
  //     name: 'Ganter',
  //     age: 23
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents!')
  //   }
  //   console.log(result.ops)
  // })

  // challenge time

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Get money back',
  //     completed: true
  //   },
  //   {
  //     description: 'Get retired rich and healthy',
  //     completed: false
  //   }

  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents!')
  //   }
  //   console.log(result.ops)
  // })

})

