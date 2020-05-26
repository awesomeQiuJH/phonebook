const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {
    console.log('connect to Mongodb')
})
.catch(err => {
    console.log('error connect to Mongodb', err.message)
})

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
})

module.exports = mongoose.model('Phonebook', phonebookSchema)


