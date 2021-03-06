var express = require('express');
var router = express.Router();
var controller = require('../controllers/contatoProfissaoController.js');

/* GET atividade page. */
router.get('/', controller.getAll);
router.get('/getLast', controller.getLast);
router.post('/save', controller.save);
router.get('/delete/:id', controller.delete);
router.get('/editarView/:id', controller.editarView);
router.post('/edit', controller.editar);

module.exports = router;
