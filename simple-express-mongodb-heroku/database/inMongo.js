const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI
const database = process.env.MONGODB_DATABASE

if (uri === undefined) throw new Error('Missing required environment variable MONGO_CONNECTION_STRING')

let connectPromise
let client

// Promise of Database
function connect() {
    if (!connectPromise) {
        client = new MongoClient(uri, { useNewUrlParser: true });
        connectPromise = new Promise((resolve, reject) => {
            client.connect(err => {
                if (err) return reject(err)
                resolve(client.db(database))
            })
        })
    }
    return connectPromise
}

function clear() {
    return connect()
        .then((db) => db.collection('messages').drop())
        .then((shouldBeTrue) => Promise.resolve())
        .catch((couldBeError) => Promise.resolve())
}

function addPost(post) {
    return connect()
        .then((db) => {
            let messages = db.collection('messages')
            return messages.insertOne(post)
                .then((insertResult) => messages.findOne({ _id: insertResult.insertedId }))
        })
}

function updatePost(messageWithNewContent) {
    return connect()
        .then((db) => db.collection('messages').findOneAndReplace(
            { _id: messageWithNewContent._id },
            messageWithNewContent,
            { returnOriginal: false }
        ))
        .then((findAndModifyResult) => findAndModifyResult.value)
}

function findAllPosts() {
    return connect()
        .then((db) => db.collection('messages').find({}).toArray())
}

function findPost(id) {
    return connect()
        .then((db) => db.collection('messages').findOne({}, { _id: id }))
}

function close() {
    return connect().then((db) => {
        connectPromise = undefined
        return client.close()
    })
}

module.exports = {
    clear,
    addPost,
    findPost,
    findAllPosts,
    updatePost,
    close
}
