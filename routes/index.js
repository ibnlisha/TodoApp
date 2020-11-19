const express = require('express');
const router = express.Router();
const todoDB = require('../models');

//get all todos
router.get('/', async (req, res) => {
    const todos = await todoDB.Todo.find({});
    res.json(todos);
});

//creat a new todo
router.post('/', async (req, res) => {
    const newTodo = new todoDB.Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
});

//show todo
router.get('/:id', async (req, res) =>{
    const todo = await todoDB.Todo.findById(req.params.id);
    res.json(tod);
});

//update todo
router.put('/:id', async (req, res) => {
    const update = await todoDB.Todo.findOneAndUpdate({_id: req.params.id},
         req.body, {new: true});
    res.json(update);
});
router.delete('/:id', async (req, res) => {
    await todoDB.Todo.findOneAndDelete({_id: req.params.id});
    res.json({message: "Todo was deleted"})
})
//remove completed todo

module.exports = router;