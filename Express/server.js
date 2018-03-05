/**
 * Created by mathias on 3/1/18.
 */
const express = require('express');
const bodyParser = require('body-parser');
console.log("iniciando");
let server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
let array = [];
server.get('/', (req, res) => {
    res.send(JSON.stringify(array));
});



const user = require('./user');

server.use('/user', user);





// Outra maneira
// server.get('/', function(req, res){
//
// });
server.listen(3000);