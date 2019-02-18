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

  //first
  // dbObject.collection('Todos')
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID('5c66fc4b408900d2d74dd90a'),
  //     },
  //     {
  //       $set: {
  //         done: true,
  //       },
  //     },
  //     {
  //       returnOriginal: false,
  //     },
  //   ).then((result) => {
  //     log(result);
  //   });

  //challenge
  dbObject.collection('Users')
    .findOneAndUpdate(
      {
        _id: new ObjectID('5c66e956408900d2d74dd65e'),
      },
      {
        $set: {
          name: 'Guilherme Cintra',
        },
        $inc: {
          age: 1,
        },
      },
      {
        returnOriginal: false,
      },
    ).then(result => log(result));

  return dbObject.close();
};

MongoClient.connect(mongoUrl, callBack);
