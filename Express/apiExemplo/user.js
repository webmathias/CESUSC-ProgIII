const express = require('express');
const fs = require('fs');
const filename = './data/users.json';
fs.mkdir('./data', ()=>{

});
let users = [];
fs.readFile(filename, (err, data)=>{
    if(err){
        users = [];
    }else {
        users = JSON.parse(data);
    }
});
let user = express();
/**
 * @api {get} /user/ Retorna lista de usuários
 * @apiName GetUser
 * @apiGroup Users
 *
 *
 * @apiSuccess {Array} lista Lista de usuários
 */
user.get('/',(req, res)=> {
    return res.json(users);
});
//This function is to get one entry
user.get('/:id',(req, res)=> {
    return res.json(users[req.params.id]);
});
//This function is to insert one entry by id
user.put('/', (req, res)=>{
    let user = req.body;
    users.push(user);
    fs.writeFile(filename,JSON.stringify(users),  (err, data)=>{
        console.log(err);
        res.sendStatus(200);
    });

});
//This function is to update one entry by id
user.post('/:id', (req, res)=>{
    let user = req.body;
    users[req.params.id] = user;
    fs.writeFile(filename,JSON.stringify(users),  (err, data)=>{
        res.sendStatus(200);
    });
});
//This function is to delete one entry by id
user.delete('/:id', (req, res)=>{
    users.splice(req.params.id,1);
    fs.writeFile(filename,JSON.stringify(users),  (err, data)=>{
        res.sendStatus(200);
    });
});

module.exports = user;





