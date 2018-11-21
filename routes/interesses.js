var express = require('express');
var router = express.Router();
var controller = require('../controllers/interessesController.js');

/* GET interesses page. */
router.get('/', function(req, res, next) {
  res.render('interesses', { title: 'Api Curriculo Romero' });
});

router.post('/save', controller.save);

module.exports = router;
