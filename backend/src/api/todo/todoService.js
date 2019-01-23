const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) // Coloco o que eu quero que seja habilitado na minha API REST (node-restful)

/** Quando um registro é atualizado no mongo, por padrão é retornado o antigo e não o atualizado 
 * Para isso, utilizamos o comando 'new' abaixo
*/
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo