/* eslint-disable no-undef */
const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/TodoApp';

const callBack = (err, dbObject) => {
  if (err) {
    return log('Unnable to connect to db');
  }
  log('connected to the mongodb server.');

  dbObject.collection('Users').find({
    name: 'Guilherme',
  }).count().then((count) => {
    log(count);
  });

  return dbObject.close();
};

MongoClient.connect(mongoUrl, callBack);
