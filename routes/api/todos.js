const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')


router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos)

router.get('/completed', todoCtrl.indexComplete, todoCtrl.jsonTodos)

router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)

router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)

router.post('/', todoCtrl.create, todoCtrl.jsonTodo)

router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router