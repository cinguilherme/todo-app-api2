const { MongoClient, ObjectID } = require('mongodb');
const log = console.info;

//mongo db protocol -> mongodb:// At Port and db name
const mongoUrl = `mongodb://localhost:27017/TodoApp`;

//MONGO V2
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

    // dbObject.collection('Todos').insertOne(todo, (err, result) => {
    //     if (err) {
    //         return log('Unnable to create todo.');
    //     }
    //     log('Todo created successfully');
    //     log(JSON.stringify(result.ops, undefined, 2));
    // })

    // dbObject.collection('Users').insertOne(user, (err, result) => {
    //     if (err) {
    //         return log('Unnable to insert User');
    //     }
    //     log(JSON.stringify(result.ops, undefined, 2));
    // });

    dbObject.collection('Users').find({
        name: 'Guilherme'
    }).count().then((count) => {
        log(count);
    });

    dbObject.close();
};

MongoClient.connect(mongoUrl, callBack);