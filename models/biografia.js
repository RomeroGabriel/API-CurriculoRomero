var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var biografiaSchema = new Esquema({
    "mini": String,
    "inteira": String,
    "dataCriacao": Date
});

module.exports = mongoose.model('biografia', biografiaSchema);