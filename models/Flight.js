const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    airline: { type: String, required: true, enum: ['American', 'Southwest', 'United'] },
    flightNo: {type: Number,  required: true},
    departs: {type: Date}
}, {
    timestamps: true
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit