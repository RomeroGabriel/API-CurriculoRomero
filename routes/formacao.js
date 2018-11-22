var express = require('express');
var router = express.Router();
var controller = require('../controllers/formacaoController.js');

/* GET formacao page. */
router.get('/', controller.getAll);
router.post('/save', controller.save);
router.get('/delete/:id', controller.delete);
router.get('/editarView/:id', controller.editarView);
router.post('/edit', controller.editar);

module.exports = router;
