var express = require('express');
var router = express.Router();

/* GET interesses page. */
router.get('/', function(req, res, next) {
  res.render('interesses', { title: 'Api Curriculo Romero' });
});

module.exports = router;
