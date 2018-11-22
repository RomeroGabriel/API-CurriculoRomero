var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var profissaoSchema = new Esquema({
    "profissao": String,
    "dataCriacao": Date
});

module.exports = mongoose.model('contatoProfissao', profissaoSchema);