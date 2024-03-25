const express = require('express')
const router = express.Router()

//controllers
const {getAllTasks, getTask, createTask, deleteTask, updateTask} = require('../controllers/tasks')
//routes

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router