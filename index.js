var express = require('express');
var app = new express();
var mongoose = require('mongoose');

app.set('MongoHost',process.env.OPENSHIFT_MONGODB_DB_HOST);
app.set('MongoPort',parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT));
app.set('MongoUser',process.env.OPENSHIFT_MONGODB_DB_USERNAME);
app.set('MongoPass',process.env.OPENSHIFT_MONGODB_DB_PASSWORD);
app.set('DbName',process.env.OPENSHIFT_APP_NAME);
app.set('port', parseInt(process.env.OPENSHIFT_NODEJS_PORT) || parseInt(process.env.PORT)|| 3000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP ||process.env.IP|| '127.0.0.1');


var mongoURL = 'mongodb://'+app.get('MongoUser')+':'+app.get('MongoPass')+'@'+app.get('MongoHost')+':'+app.get('MongoPort')+'/'+app.get('DbName');


var SEND = "Not Connected";
mongoose.connect(mongoURL,(err)=>{
    if(err) console.log(err);
    else SEND='Connected';
    SEND +='<br/>';
    SEND +=mongoURL;
    SEND +='<br/> Hello World';
});


app.get('/', function (req, res) {
  res.send(SEND);
});
try{
    app.listen(app.get('port'), app.get('ip'),function () {
  console.log('Example app listening on port '+app.get('port'));
})
}catch(e){
    console.log(e);
    console.error(e);
}

