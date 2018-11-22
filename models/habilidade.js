var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var habilidadeSchema = new Esquema({
    "habilidade": String
});

module.exports = mongoose.model('habilidade', habilidadeSchema);