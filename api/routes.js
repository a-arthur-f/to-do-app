const router = require('express').Router();

const taskController = require('./controllers/taskController');

router.get('/task', taskController.getTask);
router.post('/task', taskController.postTask);
router.delete('/task/:id', taskController.deleteTask);

module.exports= router;