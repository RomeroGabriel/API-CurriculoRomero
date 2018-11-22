var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var idiomaSchema = new Esquema({
    "idioma": String,
    "nivel": String 
});

module.exports = mongoose.model('idioma', idiomaSchema);