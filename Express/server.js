/**
 * Created by mathias on 3/1/18.
 */
const express = require('express');
const bodyParser = require('body-parser');
console.log("iniciando");
let server = express();
const expressws = require('express-ws')(server);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
let array = [];
server.get('/', (req, res) => {
    res.send(JSON.stringify(array));
});
let conexoes = [];
server.ws('/echo', (ws, req)=>{
    conexoes.push(ws);
    console.log('conectado:');
   ws.on('message', (msg)=>{
       console.log('msg Recebida:', msg);
        for(var i in conexoes){
            // console.log(conexoes[i].readyState);
            try {
                conexoes[i].send(msg);
            }catch (e){
                console.log(e);
            }
        }
   })
});

const user = require('./apiExemplo/user');

server.use('/user', user);





// Outra maneira
// server.get('/', function(req, res){
//
// });
server.listen(3000);