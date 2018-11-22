var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var atividadeSchema = new Esquema({
    "informacao": String
});

module.exports = mongoose.model('atividade', atividadeSchema);