const express = require('express')

const routes = express.Router()

const { addResult, getResult} = require('../controllers/result')

routes.post('/apiv1/add-result', addResult)
routes.get('/apiv1/results', getResult)

module.exports = routes