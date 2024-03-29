const restful = require('node-restful') // fornece uma api rest pronta
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done:{type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now} // Data da inclusao
})

module.exports = restful.model('Todo', todoSchema)