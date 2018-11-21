var express = require('express');
var router = express.Router();
var controller = require('../controllers/interessesController');

/* GET interesses page. */
router.get('/', function(req, res, next) {
  res.render('interesses', { title: 'Api Curriculo Romero' });
});

router.post('/save', function(req, res) {
    controller.save(req, res);
});

module.exports = router;
