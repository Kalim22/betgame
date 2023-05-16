const mongoose = require('mongoose')

const resultSchema = mongoose.Schema({
    serialNo: {
        type: Number,
        required: [true, 'Serial Number is required!'],
    },
    dateTime: {
        type: String,
        required: [true, 'Date and time is required!']
    },
    color: {
        type: String,
        required: [true, 'Color is required!']
    },
}, {timestamps: true})


module.exports = mongoose.model('result', resultSchema)