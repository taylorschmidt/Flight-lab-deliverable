
const mongoose = require('mongoose')

const Terminal = mongoose.model (
    "Terminal",
    new mongoose.Schema({
        name: String,
        flights: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Flight"
            }
        ], //array of referenced Flight Objects
        capacity: Number,

    })
)

module.exports = Terminal