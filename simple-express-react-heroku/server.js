const express = require('express')
const path = require('path');
const app = express()


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// use json body parser
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

// catchall for when no routes are matched
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}`))
