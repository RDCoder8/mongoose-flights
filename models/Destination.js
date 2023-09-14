const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    airport: { type: String, required: true, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']},
    arrival: Date
})

const Destination = mongoose.model('Destination', destinationSchema)

module.exports = Destination