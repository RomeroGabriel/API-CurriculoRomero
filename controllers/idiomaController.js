var modelIdioma = require('../models/idioma.js');

module.exports = {
    save: function (req, res) {
        var idioma = new modelIdioma({
            idioma: req.body.idioma,
            nivel: req.body.nivel
        });
        idioma.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar idioma', error: err }) };
            return res.redirect('/idioma');
        });
    },

    get: function (req, res) {
        var obj = req.body.obj;
        modelIdioma.findOne({ idioma: obj }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar idioma', error: err }) };
            return res.render('idiomasEdit', { inte });
        });
    },

    getAll: function (req, res) {
        modelIdioma.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar idiomas', error: err }) };
            return res.render('idiomas', { inte });
        });
    },

    getAllOut: function (req, res) {
        modelIdioma.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar atividades', error: err }) };
            return res.json(inte);
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelIdioma.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar idioma', error: err }) };
            return res.redirect('/idioma');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelIdioma.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição idioma', error: err }) };
            return res.render('idiomasEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var idioma = req.body.idioma;
        var nivel = req.body.nivel
        var inte = { _id: id, idioma: idioma, nivel: nivel };
        modelIdioma.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar idioma', error: err }) };
            return res.redirect('/idioma');
        });
    }
}