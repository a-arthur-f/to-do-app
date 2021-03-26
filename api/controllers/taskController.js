const Task = require('../models/taskModel');

async function getTask(req, res) {
    try {
        const result = await Task.find();
        res.json({data: result, status: 'ok'});
    } catch(e) {
        res.json({ status: 'failed' });
    }
}

async function postTask(req, res) {
    const { text } = req.body;
    try {
        const task = new Task({ text, status: false });
        await task.save();
        res.json({ status: 'ok' });
    } catch(e) {
        res.json({ status: 'failed' });
    }   
}

async function updateTask(req, res) {
    const { id } = req.params;
    try {
        await Task.updateOne({_id: id}, {status: true});
        res.json({ status: 'ok' })
    } catch(e) {
        res.json({ status: 'failed' })
    }
}

async function deleteTask(req, res) {
    try {
        await Task.deleteOne({_id: req.params.id});
        res.json({ status: 'ok' });
    } catch(e) {
        console.log(e);
        res.json({ status: 'failed' });
    }
}

module.exports.getTask = getTask;
module.exports.postTask = postTask;
module.exports.deleteTask = deleteTask;
module.exports.updateTask = updateTask;