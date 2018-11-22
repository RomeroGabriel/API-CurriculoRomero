var modelPort = require('../models/port.js');

module.exports = {
    save: function (req, res) {
        var port = new modelPort({
            title: req.body.title,
            date: req.body.date,
            description: req.body.description
        });
        port.save(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao salvar portfolio', error: err }) };
            return res.redirect('/port');
        });
    },

    getAll: function (req, res) {
        modelPort.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar portfolio', error: err }) };
            return res.render('ports', { inte });
        });
    },

    getAllOut: function (req, res) {
        modelPort.find(function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao pegar portfolio', error: err }) };
            return res.json(inte);
        });
    },

    delete: function (req, res) {
        var id = req.params.id;
        modelPort.findByIdAndRemove(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao deletar portfolio', error: err }) };
            return res.redirect('/port');
        });
    },

    editarView: function (req, res, next) {
        var id = req.params.id;
        modelPort.findById(id, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao acessar a edição portfolio', error: err }) };
            return res.render('portsEdit', { inte })
        });
    },

    editar: function (req, res, next) {
        var id = req.body.id;
        var title = req.body.title;
        var date = req.body.date;
        var description = req.body.description;
        var inte = { _id: id, title: title, date: date, description: description };
        modelPort.findByIdAndUpdate(id, inte, { new: true }, function (err, inte) {
            if (err) { return res.status(500).json({ message: 'Erro ao editar portfolio', error: err }) };
            return res.redirect('/port');
        });
    }
}