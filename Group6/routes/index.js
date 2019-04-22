'use strict';
var express = require('express');
var router = express.Router();
var arr = require(__dirname+'/app.js');
var fs = require('fs');
router.get('/', function(req, res, next) {
  res.render('index',{title : 'Main page',items: arr});
});

router.get('/post/:id',function(req,res,next){
  for(var i=0;i<arr.length;++i){
    var items = arr[i];
    var new_arr = [];
    if(items.id === req.params.id){
      var data = fs.readFileSync(__dirname+'/../data/txt/'+items.content,'utf8');
      var new_item = items;
      new_item.content = data.toString();
      new_arr.push(new_item);
      res.render('post',{title:'Reviews',items:new_arr});
    }
  }
});

router.get('/aboutme',function(req,res,next){
  res.render('aboutme', {title: 'About me'});
});

router.get('/manager',function(req,res,next){
  res.render('manager',{title: 'Page manager',items: arr});
});

router.get('/newpost',function(req,res,next){
  res.render('submitform',{title: 'Submit'});
});

router.get('/edit/:id',function(req,res,next){
  res.render('submitform',{title: 'Submit'});
});
module.exports = router;
