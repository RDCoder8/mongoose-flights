const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    airport: { type: String, required: true, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']},
    arrival: Date
})

const flightSchema = new mongoose.Schema({
    airline: { type: String, required: true, enum: ['American', 'Southwest', 'United'] },
    flightNo: {type: Number,  required: true, min: 10, max: 9999},
    departs: {type: Date},
    airport: { type: String, required: true, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN'},
    destinations: [destinationSchema]
}, {
    timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight