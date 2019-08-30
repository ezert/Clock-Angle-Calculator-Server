const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const express = require('express');
const inputManager = require('../inputManager');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', (req, res) => { 
    res.send('Bem vindo à página principal.\nPara calcular o ângulo entre dois ponteiros de um relógio acesse localhost:3000/clock/*insira hora*/*insira minuto*');
});

server.get ('/clock', (req, res) => {

    res.send('0°');

})

server.get('/clock/:h/:min', (req, res) => {
    
    res.send(inputManager(req.params.h, req.params.min));

});

server.get('/clock/:h', (req, res) => {
    
    res.send(inputManager(req.params.h, 0));

});

server.listen(port, function () { 
    console.log('Listening on...') 
});

module.exports = server;