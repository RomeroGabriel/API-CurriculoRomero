var modelBiografia = require('../models/biografia.js');

module.exports = {
    save: function (req, res) {
        var biografia = new modelBiografia({
            mini: req.body.mini,
            inteira: req.body.inteira
        });
        biografia.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar biografia', error: err }) };
            return res.redirect('/biografia');
        });
    },

    getAll: function (req, res) {
        modelBiografia.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar biografia', error: err }) };
            return res.render('biografias', { inte });
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelBiografia.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar biografia', error: err }) };
            return res.redirect('/biografia');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelBiografia.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição biografia', error: err }) };
            return res.render('biografiasEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var mini = req.body.mini;
        var inteira = req.body.inteira;
        var inte = { _id: id, mini: mini, inteira: inteira };
        modelBiografia.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar biografia', error: err }) };
            return res.redirect('/biografia');
        });
    }
}