function modeloBase(modelo){
    this.modelo = modelo;
    this.connection = require('../db/db');
}

modeloBase.prototype.insert = function(item, callback){
    this.connection.collection(this.modelo).insert(item, callback);
};

module.exports = function(){
    return modeloBase;
};