const mongoose = require('mongoose')

const Flight = mongoose.model (
    "Flight",
    new mongoose.Schema({
        from: String,
        to: String,
        alirline: String,
    })
)

module.exports = Flight



