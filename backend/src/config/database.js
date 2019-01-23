const mongoose = require('mongoose') // conexao com mongodb
mongoose.Promise = global.Promise // Apenas para tirar a mensagem de advertencia

module.exports = mongoose.connect('mongodb://localhost/todo')