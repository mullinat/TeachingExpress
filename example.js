var express = require('express');
var app = express();
var html = "<p>Login</p><br><input type='text'></input>"
app.get('/', function(req, res){
  res.send('I Like Pie');
});
app.get('/login', function(req, res){
    res.send(html);
  });

app.listen(3000);
