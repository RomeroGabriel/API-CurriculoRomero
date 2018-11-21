function intereController(){
    this.model = require('../models/interesses');
}

intereController.prototype.save = function(req, res){
    const info = req.body.info;
    this.model.insert({info, id}, (err, result) => {
        if(err) console.log('Errou: '+err);
        if(result) console.log('Acertou: '+result);
    });
}

module.exports = function(){
    return intereController;
}