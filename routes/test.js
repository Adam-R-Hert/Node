try {
var request = require('request');
}
catch(e){
	if( e.code ==='MODULE_NOT_FOUND'){
	console.log('not found');
}
}


var cheerio = require('cheerio');

module.exports= function(app){

app.get('/test', function (req, res){

var url = 'http://www.weatheroffice.gc.ca/city/pages/bc-74_metric_e.html';
var news = 'test';

function scrape_page(url, callback){
console.log(url); 
request(url, function(error, response, html, callback){
	console.log('here');	
	console.log('test');	
if(!error){
	var $ = cheerio.load(html);
	$(".wxo-metric-hide").eq(1).filter(function(callback){	
	console.log('test2');	
	var data = $(this);
	news = data.first().text();	
	//news = 'number1';
	console.log(news);
	res.send(news);
	});
  		}
	else{
	res.send('no news');
	}
	});
console.log(2);
//callback(news +'2');
};

function send_res(news){
res.send(news);
}

scrape_page(url, send_res);

//res.render('basic_header', {);
//res.end();




});
}
