/* eslint-disable no-undef */
const { MongoClient, ObjectID } = require('mongodb');

const log = console.info;

const mongoUrl = 'mongodb://localhost:27017/TodoApp';

const callBack = (err, dbObject) => {
  if (err) {
    return log('Unnable to connect to db');
  }
  log('connected to the mongodb server.');


  const id = new ObjectID('5c66e94f408900d2d74dd65a');
  log(id);

  dbObject.collection('Users').deleteOne({ _id: id }).then((result) => {
    log(result);
  });

  return dbObject.close();
};

MongoClient.connect(mongoUrl, callBack);
