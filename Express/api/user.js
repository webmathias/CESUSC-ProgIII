const express = require('express');


var entry = require("../models/user");

let user_api = express();
//This function is to get one entry
user_api.get('/', (req, res) => {
    entry.find({}, {__v: false}, (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(data || []);
        }
    });
});
//This function is to get one entry
user_api.get('/:id', (req, res) => {
    entry.findOne({_id: req.params.id}, (err, obj) => {
        if (err)
            return res.sendStatus(500);
        if(!obj)
            return res.sendStatus(204);
        res.json(obj || []);
    });
});
//This function is to insert one entry by id
user_api.put('/', (req, res) => {
    let obj = req.body;
    try {
        var entity = new entry(obj);
        entity.save((err, saved) => {
            if (err) {
                console.error(e);
                res.sendStatus(500);
            }
            res.send(saved);
        });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});
//This function is to update one entry by id
user_api.post('/:id', (req, res) => {
    let obj = req.body;
    entry.findOne({_id: req.params.id}, (err, obj) => {
        if (err)
            res.sendStatus(500);
        if(!obj)
            return res.sendStatus(204);
        try {
            for(let key in obj){
                obj[key] = obj[key];
            }
            obj.save((err, saved) => {
                if (err)
                    res.sendStatus(500).send(err);
                res.send(saved);
            });
        } catch (e) {
            res.sendStatus(500);
        }
    });
});
//This function is to delete one entry by id
user_api.delete('/:id', (req, res) => {
    entry.findOne({_id: req.params.id}, (err, obj) => {
        if (err)
            res.sendStatus(500);
        if(!obj)
            return res.sendStatus(204);
        entry.remove({
            _id: req.params.id
        }, (err, result) => {
            if (err)
                res.status(500);
            res.json(result);
        });
    });
});

module.exports = user_api;





