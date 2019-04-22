var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title : 'Main page'});
});

router.get('/aboutme',function(req,res,next){
  res.render('aboutme', {title: 'About me'});
});

router.get('/manager',function(req,res,next){
  
  res.render('manager',{title: 'Page manager',});
});

module.exports = router;
