var modelRedes = require('../models/redesSociais.js');

module.exports = {
    save: function (req, res) {
        var rede = new modelRedes({
            linkedin: req.body.linkedin,
            github: req.body.github,
            dataCriacao: Date.now()
        });
        rede.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar redes', error: err }) };
            return res.redirect('/rede');
        });
    },

    getAll: function (req, res) {
        modelRedes.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar redes', error: err }) };
            return res.render('redes', { inte });
        });
    },

    getLast: function (req, res) {
        modelRedes.findOne({}, {}, { sort: { 'dataCriacao' : 1 } }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar contato profissao', error: err }) };
            return res.json(inte);
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelRedes.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar redes', error: err }) };
            return res.redirect('/rede');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelRedes.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição redes', error: err }) };
            return res.render('redesEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var linkedin = req.body.linkedin;
        var github = req.body.github;
        var dataCriacao = req.body.dataCriacao;
        var inte = { _id: id, linkedin: linkedin, github: github, dataCriacao: dataCriacao };
        modelRedes.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar redes', error: err }) };
            return res.redirect('/rede');
        });
    }
}