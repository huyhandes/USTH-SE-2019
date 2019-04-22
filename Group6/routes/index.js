var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var post = [
    {
      id: 'first',
      headerName: 'test',
      sum: 'try new',
      user: 'random guys',
      date: '20, May, 2019'
    },
    {
      id: 'second',
      headerName: 'test1',
      sum: 'try new gg',
      user: 'random guys go',
      date: '20, May, 2019'
      }
  ];
  res.render('index',{title : 'Main page',items: post});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login page',layout: false ,success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
});

router.get('/aboutme',function(req,res,next){
  res.render('aboutme', {title: 'About me'});
})

router.post('/submit', function(req,res,next) {
  var id = "root";
  var pass = "admin";
  //req.check('inputpPassword',"Password is invalid").equals(pass);
  req.check('inputEmail',"Wrong ID").equals(id);
  var errors = req.validationErrors();
  if(errors){
    req.session.errors = errors;
    req.session.success = false;
  }
  else{
    req.session.success = true;
  }
  if(req.session.success) res.redirect('/pagemanager');
  else res.redirect('/login');
})

module.exports = router;
