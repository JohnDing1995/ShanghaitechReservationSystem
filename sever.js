
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended: true}) );

app.use('/api', require('./routers/api'));


//mongoose.connect('mongodb://localhost:27017/blog', function(err) {
// if (err) {
  //  console.log('数据库连接失败');
 //} else {
 //   console.log('数据库连接成功');
 // //  app.listen(8888);
 //}
//});
app.listen(8888);