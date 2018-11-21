var modelInteresse = require('../models/interesses.js');

module.exports = {
    save: function(req, res) {
        var interesse = new modelInteresse({        
            informacao : req.body.interesse
        });

        interesse.save(function(err, inte){
            if(err) { return res.status(500).json({ message: 'Erro ao salvar interesse', error: err }) };
            return res.json({ message: 'Interesse salvo com sucesso', _id: inte._id })
        });
    }
}