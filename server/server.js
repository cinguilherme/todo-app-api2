const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const TodoModel = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
  },
});

const newTodo = new TodoModel({
  text: 'Cook dinner',
});

const newTodo2 = new TodoModel({
  text: 'Take a shower',
  completedAt: new Date().getTime(),
});


newTodo2.save().then((doc) => {
  console.log('saved todo', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('unnable to save todo', e);
});
