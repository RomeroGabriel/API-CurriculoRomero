var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var formacaoSchema = new Esquema({
    "informacao": String
});

module.exports = mongoose.model('formacao', formacaoSchema);