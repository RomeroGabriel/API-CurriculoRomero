var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var redesSchema = new Esquema({
    "linkedin": String,
    "github": String,
    "dataCriacao": Date
});

module.exports = mongoose.model('redesSociais', redesSchema);