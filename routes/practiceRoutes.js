const express = require('express')

const routes = express.Router()

const { addUserDetails, getuser} = require('../controllers/practice')

routes.post('/apiv1/add-user', addUserDetails)
routes.get('/apiv1/users', getuser)

module.exports = routes