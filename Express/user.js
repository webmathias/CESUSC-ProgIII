const express = require('express');


let users = [];


let user = express();
//This function is to get one entry
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
    res.sendStatus(200);
});
//This function is to update one entry by id
user.post('/:id', (req, res)=>{
    let user = req.body;
    users[req.params.id] = user;
    res.sendStatus(200);
});
//This function is to delete one entry by id
user.delete('/:id', (req, res)=>{
    users.splice(req.params.id,1);
    res.sendStatus(200);
});

module.exports = user;





