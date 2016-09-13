var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sqautch' });
});

/*
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'sqautch' });
});
*/

module.exports = router;
