const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the api'
    });
});

app.post('/api/posts', (req, res) => {
    res.json({
        message: 'post created'
    });
});

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'elhad',
        email: 'elhad@gmail.com'
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    });
});

// verify token
function verifyToken(req, res, next) {
    // get auth header value
    const bearerHeader= req.headers['authorization'];
    // check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // set the token
        req.token = bearerToken;
        // next middleware
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log('Server started on port 5000'));
