require('dotenv').config()
const process = require('process')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const Phonebook = require('./models/phonebook')

app.use(cors())
app.use(express.json())

app.use(express.static('build'))
app.use(morgan((tokens, req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        JSON.stringify(req.body)
    ].join(' ')
}))

app.get('/api/persons', (req, res, next) => {
    Phonebook.find().then(r => {
        res.json(r)
    }).catch(err => next(err))

})

app.get('/info', (req, res) => {
    const text = `Phonebook has info for  people. <br /> <p>${new Date()}</p>`
    res.send(text)
})

app.get('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    Phonebook.findById(id).then(r => {
        if (r) {
            res.json(r)
        } else {
            res.status(404).end()
        }
    }).catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    Phonebook.findByIdAndRemove(id)
        .then(() => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    if (body.name === undefined || body.number === undefined) {
        return res.status(400).json({ error: 'name or number missing' })
    }

    const phonebook = new Phonebook(body)

    phonebook.save().then(r => {
        res.json(r)
    })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const id = req.params.id

    Phonebook.findByIdAndUpdate(id, body, { new: true, runValidators: true }).then(r => res.json(r)).catch(err => next(err))
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})