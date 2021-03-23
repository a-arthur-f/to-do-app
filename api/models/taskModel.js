const { mongoose } = require('../db');

const taskSchema = mongoose.Schema({
    text: { type: String, required: true},
    status: { type: Boolean, required: true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;