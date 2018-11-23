var express = require('express');
var router = express.Router();
var controller = require('../controllers/idiomaController.js');

/* GET formacao page. */
router.get('/', controller.getAll);
router.get('/getAll', controller.getAllOut);
router.post('/get', controller.get)
router.post('/save', controller.save);
router.get('/delete/:id', controller.delete);
router.get('/editarView/:id', controller.editarView);
router.post('/edit', controller.editar);

module.exports = router;
