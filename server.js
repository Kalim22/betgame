const express = require('express')

const cors = require('cors')

require('./connection/conn')
require('colors')

require('dotenv').config({
    path: "./secret/.env"
})

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(express.json())
// app.use(express.static(public))

app.get("/", (req, res) => {
    return res.render('hello');
});

app.use('/', require('./routes/resultsRoutes'))

const port = process.env.PORT || 6000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port} .... `.bgYellow)
})

