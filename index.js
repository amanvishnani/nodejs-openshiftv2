var express = require('express');
var app = new express();

app.set('port', parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8080);


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+app.get('port'));
})
