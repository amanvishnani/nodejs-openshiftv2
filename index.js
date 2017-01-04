var express = require('express');
var app = new express();
var mongoose = require('mongoose');
app.set('port', parseInt(process.env.OPENSHIFT_NODEJS_PORT) || parseInt(process.env.PORT)|| 3000);


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+app.get('port'));
})
