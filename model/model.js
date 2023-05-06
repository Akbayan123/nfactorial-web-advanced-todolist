const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tododb')
  .then(() => console.log('Connected'))
  .catch((err) => console.error('Did not connect', err));

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    }
  });

const todo = mongoose.model('Todo', todoSchema);

module.exports = todo