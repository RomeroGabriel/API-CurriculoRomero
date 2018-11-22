var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var portSchema = new Esquema({
    "title": String,
    "date": Date,
    "description": String
});

module.exports = mongoose.model('portfolio', portSchema);