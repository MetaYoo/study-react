const express = require('express');

const app = express();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello');
});
app.post('/login', function (req, res) {
    let user = {
        _id: 1,
        username: 'admin',
        password: '123456',
        status: 0
    }
    res.json(user);
})
app.listen(5000);