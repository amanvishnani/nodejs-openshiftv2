var express = require('express');
var app = new express();
var mongoose = require('mongoose');
app.set('port', parseInt(process.env.OPENSHIFT_NODEJS_PORT) || parseInt(process.env.PORT)|| 3000);
app.set('ip', process.env.IP ||process.env.IP|| '127.0.0.1');


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(app.get('port'), app.get('ip'),function () {
  console.log('Example app listening on port '+app.get('port'));
})
