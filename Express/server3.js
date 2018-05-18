const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const Mongoose = require('mongoose');

const mongo_host = "localhost";
const mongo_user = "";
const mongo_pass = "";
const mongo_port = 27017;
const mongo_database_name = "local";
// const mongo_url = "mongodb://" + (mongo_user ? (mongo_user + ":" + mongo_pass + "@") : "") + mongo_host + ":" + mongo_port + "/" + mongo_database_name;
const mongo_url = "mongodb://webmathias:webmathias@ds062097.mlab.com:62097/webmathias"

let server = express();
/*
 Only accept JSON request
 Remember to use Content-Type header on requests:
 Content-Type: application/json;

 */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(session({
    store: new FileStore(),
    secret: 'asdfasdfasdf',
    resave: true,
    saveUninitialized: true
}));

// TODO Remove on production
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", ["OPTIONS", "GET", "POST", "DELETE", "PUT"]);
    next();
});

// Authentication check, use for internal application requests
const auth = (req, res, next) => {
    if (!req.session.user) {
        return res.status(403).send('');
    }
    next();
}

let array = [];
server.get('/', (req, res) => {
    res.send(JSON.stringify(array));
});

// User in case to restfull template
server.use('/user', require('./api/user'));

server.listen(3001, '0.0.0.0', () => {
    console.log("Server started: ", new Date());
    console.log("tring connect on mongo: ", mongo_url);
    Mongoose.connect(mongo_url, {}, (err, db) => {
        if (err) {
            console.log("Couldn't connect to mongo. Error: " + mongo_url);
            console.log("Couldn't connect to mongo. Error: " + err);
        } else {
            console.log("Connected to mongo");
        }
    });
});
