require('dotenv').config()
const express = require('express')
const app = express()
const database = require('./database/inMongo')

//
app.use(express.json())

// api
app.get('/api/posts', function (req, res) {
    database.findAllPosts()
        .then((posts) => res.send(posts))
});

app.get('/api/posts/:postId', function (req, res) {
    database.findPost(req.params.postId)
        .then((post) => res.send(post))
});


app.post('/api/posts', function (req, res) {
    database.addPost(req.body)
        .then((post) => res.send(post))
});


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}`))



