const express = require('express')

const routes = express.Router()

const { generateColor, getResult, savePlaceBet} = require('../controllers/result')

routes.post('/apiv1/generatecolor', generateColor)
routes.get('/apiv1/results', getResult)
routes.post('/apiv1/place-bet', savePlaceBet)

module.exports = routes