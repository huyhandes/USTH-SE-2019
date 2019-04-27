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
      console.log(items.content)
      var data = fs.readFileSync(__dirname+'/../data/txt/'+items.content,'utf8');
      var new_item = items;
      new_item.substance = data.toString();
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

router.post('/submit',function(req,res,next){
  var obj = {
      id: "",
      title : req.body.title,
      subtitle: req.body.subtitle,
      director: req.body.director,
      cast: req.body.cast,
      rated: req.body.reated,
      type: req.body.type,
      duration: req.body.duration,
      postedtime: req.body.postedtime,
      content:""
  }
  obj.id = (obj.title.toLowerCase()).split(' ').join('-');
  obj.content = obj.id+'.txt';
  var json = JSON.stringify(obj);
  fs.writeFile(__dirname+'/../data/json/'+obj.id+'.json',json,'utf8');
  fs.writeFile(__dirname+'/../data/txt/'+obj.content,req.body.content,'utf8');
  res.redirect('/');
});
module.exports = router;
