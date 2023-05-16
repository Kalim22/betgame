const mongoose = require('mongoose')


require('dotenv').config({
    path: "./secret/.env"
})

const options = {
    dbName: 'colorPrediction'
}

const uri = process.env.URI

mongoose.connect(uri, options).then(res => {
    console.log('Database is connected....'.bgRed)
}).catch(err => {
    console.log('Error is ->', err)
})

module.exports = mongoose