var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main page' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login page',layout: false });
});

module.exports = router;
