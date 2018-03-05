var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema(
    {
        name: {type: 'String'}
        , user: {type: 'String'}
    }
);

module.exports = mongoose.model('user', user);