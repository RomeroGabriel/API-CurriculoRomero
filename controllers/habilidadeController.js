var modelHabilidade = require('../models/habilidade.js');

module.exports = {
    save: function (req, res) {
        var habilidade = new modelHabilidade({
            habilidade: req.body.habilidade
        });
        habilidade.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar habilidade', error: err }) };
            return res.redirect('/habilidade');
        });
    },

    getAll: function (req, res) {
        modelHabilidade.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar habilidade', error: err }) };
            return res.render('habilidades', { inte });
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelHabilidade.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar habilidade', error: err }) };
            return res.redirect('/habilidade');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelHabilidade.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição habilidade', error: err }) };
            return res.render('habilidadesEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var info = req.body.habilidade;
        var inte = { _id: id, habilidade: info };
        modelHabilidade.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar habilidade', error: err }) };
            return res.redirect('/habilidade');
        });
    }
}