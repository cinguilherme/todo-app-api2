/* eslint-disable no-undef */
const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/TodoApp';

const callBack = (err, dbObject) => {
  if (err) {
    return log('Unnable to connect to db');
  }
  log('connected to the mongodb server.');

  const todo = {
    text: 'To check if I can write stuff into mongodb',
    done: false,
  };

  const user = {
    name: 'Guilherme',
    age: 32,
    location: 'recife',
  };

  dbObject.collection('Users').find({
    name: 'Guilherme',
  }).count().then((count) => {
    log(count);
  });

  dbObject.close();
};

MongoClient.connect(mongoUrl, callBack);
