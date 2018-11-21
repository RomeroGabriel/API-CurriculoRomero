var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var interesseSchema = new Esquema({
    "informacao": String
});

module.exports = mongoose.model('interesse', interesseSchema);