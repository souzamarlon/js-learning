const express = require('express');

const server = express();


server.get('/teste', (req, res) => {
    return res.send('Hello World!');
})

server.listen(3000);