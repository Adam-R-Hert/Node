var express = require('express');
var app = module.exports = express();
app.set('view engine', 'ejs');


require('./routes')(app);

app.get('/', function(req, res){
	res.send('Hello World!');
});




var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

console.log('app listening..');
});
