const mongoose = require('mongoose')


require('dotenv').config({
    path: "./secret/.env"
})

const options = {
    dbName: 'colorPrediction'
}

const uri = process.env.URI || "mongodb+srv://arsenal:H0oa0Cidu0vt8iMc@arsenal.a1hmwwd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, options).then(res => {
    console.log('Database is connected....'.bgRed)
}).catch(err => {
    console.log('Error is ->', err)
})

module.exports = mongoose