var modelAtividade = require('../models/atividade.js');

module.exports = {
    save: function (req, res) {
        var atividade = new modelAtividade({
            informacao: req.body.atividade
        });
        atividade.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar atividades', error: err }) };
            return res.redirect('/atividade');
        });
    },

    getAll: function (req, res) {
        modelAtividade.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar atividades', error: err }) };
            return res.render('atividades', { inte });
        });
    },

    getAllOut: function (req, res) {
        modelAtividade.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar atividades', error: err }) };
            return res.json(inte);
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelAtividade.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar atividades', error: err }) };
            return res.redirect('/atividade');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelAtividade.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição atividades', error: err }) };
            return res.render('atividadesEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var info = req.body.atividade;
        var inte = { _id: id, informacao: info };
        modelAtividade.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar atividades', error: err }) };
            return res.redirect('/atividade');
        });
    }
}