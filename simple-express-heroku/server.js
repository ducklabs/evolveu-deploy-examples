const express = require('express')
const app = express()

// JSON Parser
app.use(express.json())

// api
app.get('/api/posts', function (req, res) {
    res.send('getting all posts');
});

app.get('/api/posts/:postId', function (req, res) {
    res.send('getting one post');
});


app.post('/api/posts', function (req, res) {
    res.send('saving a post');
});


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}`))
