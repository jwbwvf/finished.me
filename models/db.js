var mongoose = require('mongoose')

const dbURI = process.env.NODE_ENV === 'development' ? 'mongodb://localhost/finish' : process.env.MONGO_URI

mongoose.Promise = global.Promise
mongoose.connect(dbURI, { useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
  console.log('mongoose connected to ' + dbURI)
})

db.on('error', (error) => {
  console.log('mongoose error ' + error)
})

db.on('disconnected', () => {
  console.log('mongoose disconnected')
})

require('./users')
