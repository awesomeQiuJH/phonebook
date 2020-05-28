const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(res => {
    console.log('connect to Mongodb')
  })
  .catch(err => {
    console.log('error connect to Mongodb', err.message)
  })

const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minlength: 3
  },
  number: {
    type: String,
    minlength: 8
  }
})

const a = () => {
    
}

phonebookSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Phonebook', phonebookSchema)
