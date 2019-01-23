const express = require('express')

module.exports = function (server){

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')

    // Register: usa a url como base ['get', 'post', 'put', 'delete']
    todoService.register(router, '/todos')
}