const mongoose = require('mongoose')

const placeBetSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'user name is required!']
    },
    selectedColor: {
        type: String,
        required: [true, 'color is required!']
    }
})

module.exports = mongoose.model('placebet', placeBetSchema)