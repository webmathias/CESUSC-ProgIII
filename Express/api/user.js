const express = require('express');


var entry = require("../models/user");

let user_api = express();

/**
 * @api {get} /user/ Request Users list
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess {Array} users List of users
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *          "firstname": "John"
 *       }
 *     ]
 * @apiError (Erro 5xx) ServerError Internal Error
 *
 */
user_api.get('/', (req, res) => {
    entry.find({}, {__v: false}, (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(data || []);
        }
    });
});
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id User unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John"
 *     }
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (Erro 5xx) ServerError Internal Error
 *
 */
user_api.get('/:id', (req, res) => {
    entry.findOne({_id: req.params.id}, (err, obj) => {
        if (err)
            return res.sendStatus(500);
        if(!obj)
            return res.sendStatus(204);
        res.json(obj || []);
    });
});
/**
 * @api {put} /user/:id Insert new user
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam {String} firstName Users name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "firstName": "John"
 *     }
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John"
 *     }
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (Erro 5xx) ServerError Internal Error
 *
 */
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
/**
 * @api {post} /user/:id Update user
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiParam {ID} id User ID.
 * @apiParam {String} firstName Users name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "firstName": "John"
 *     }
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John"
 *     }
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (Erro 5xx) ServerError Internal Error
 *
 */
user_api.post('/:id', (req, res) => {
    let obj1 = req.body;
    entry.findOne({_id: req.params.id}, (err, obj) => {
        if (err)
            res.sendStatus(500);
        if(!obj)
            return res.sendStatus(204);
        try {
            for(let key in obj){
                obj[key] = obj1[key];
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
/**
 * @api {delete} /user/:id Remove a user
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {ID} id User ID.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John"
 *     }
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 * @apiError (Erro 5xx) ServerError Internal Error
 *
 */
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





