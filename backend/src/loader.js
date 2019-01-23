const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) // passando o server e invocando o método