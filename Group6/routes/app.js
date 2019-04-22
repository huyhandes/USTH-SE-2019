var fs = require('fs');
var arr = [];
fs.readdir(__dirname + '/../data/json',function(err,files){
  for(var i=0;i<files.length;++i){
    var jsonContent = JSON.parse(fs.readFileSync(__dirname + '/../data/json/'+files[i],'utf8'));
    arr.push(jsonContent);
  }
});

module.exports = arr;