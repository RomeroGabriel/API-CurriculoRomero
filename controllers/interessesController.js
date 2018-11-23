var modelInteresse = require('../models/interesses.js');

module.exports = {
    save: function (req, res) {
        var interesse = new modelInteresse({
            informacao: req.body.interesse
        });
        interesse.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar interesse', error: err }) };
            return res.redirect('/interesse');
        });
    },

    getAll: function (req, res) {
        modelInteresse.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar interesses', error: err }) };
            return res.render('interesses', { inte });
        });
    },

    get: function (req, res) {
        var obj = req.body.obj;
        console.log(obj)
        modelInteresse.findOne({ informacao: obj }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar interesses', error: err }) };
            return res.render('interessesEdit', { inte });;
        });
    },

    getAllOut: function (req, res) {
        modelInteresse.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar atividades', error: err }) };
            return res.json(inte);
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelInteresse.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar interesse', error: err }) };
            return res.redirect('/interesse');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelInteresse.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição interesse', error: err }) };
            return res.render('interessesEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var info = req.body.interesse;
        var inte = { _id: id, informacao: info };
        modelInteresse.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar interesse', error: err }) };
            return res.redirect('/interesse');
        });
    }
}