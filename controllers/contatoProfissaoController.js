var modelContatoProfissao = require('../models/contatoProfissao.js');

module.exports = {
    save: function (req, res) {
        var contatoProfissao = new modelContatoProfissao({
            profissao: req.body.profissao,
            dataCriacao: Date.now()
        });
        contatoProfissao.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar contato profissao', error: err }) };
            return res.redirect('/contatoProfissao');
        });
    },

    getAll: function (req, res) {
        modelContatoProfissao.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar contato profissao', error: err }) };
            return res.render('contatosProfissao', { inte });
        });
    },

    getLast: function (req, res) {
        modelContatoProfissao.findOne({}, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar contato profissao', error: err }) };
            return res.json(inte);
        }).sort({ 'dataCriacao' : -1 });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelContatoProfissao.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar contato profissao', error: err }) };
            return res.redirect('/contatoProfissao');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelContatoProfissao.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição contato profissao', error: err }) };
            return res.render('contatosProfissaoEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var profissao = req.body.profissao;
        var data = req.body.data;
        var inte = { _id: id, profissao: profissao, dataCriacao: data };
        modelContatoProfissao.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar contato profissao', error: err }) };
            return res.redirect('/contatoProfissao');
        });
    }
}