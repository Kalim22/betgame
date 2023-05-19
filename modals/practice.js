const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Serial Number is required!'],
    },
    age: {
        type: String,
        required: [true, 'Date and time is required!']
    },
    mobile: {
        type: Number,
        required: [true, 'mobile number is required!']
    },
    email: {
        type: String,
        required: [true, 'email is required!']
    },
}, {timestamps: true})


module.exports = mongoose.model('user', userSchema)