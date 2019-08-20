const express = require('express');

const server = express();


server.get('/users/:id', (req, res) => {
    const {id} = req.params;

    return res.json({message: `Usuário: ${id}` })
})

server.listen(3000);


//Route params
// server.get('/users/:id', (req, res) => {
//     const id = req.params.id;

//     return res.json({message: `Usuário: ${id}` })
// })



// Query params
// server.get('/teste', (req, res) => {
//     const nome = req.query.nome;

//     return res.json({message: `Hello ${nome}` })
// })