var modelFormacao = require('../models/formacao.js');

module.exports = {
    save: function (req, res) {
        var formacao = new modelFormacao({
            informacao: req.body.formacao
        });
        formacao.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar formacao', error: err }) };
            return res.redirect('/formacao');
        });
    },

    getAll: function (req, res) {
        modelFormacao.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar formacao', error: err }) };
            return res.render('formacoes', { inte });
        });
    },

    getAllOut: function (req, res) {
        modelFormacao.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar formacao', error: err }) };
            return res.json(inte);
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelFormacao.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar formacao', error: err }) };
            return res.redirect('/formacao');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelFormacao.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição formacao', error: err }) };
            return res.render('formacoesEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var info = req.body.formacao;
        var inte = { _id: id, informacao: info };
        modelFormacao.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar formacao', error: err }) };
            return res.redirect('/formacao');
        });
    }
}