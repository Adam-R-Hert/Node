try {
var request = require('request');
}
catch(e){
	if( e.code ==='MODULE_NOT_FOUND'){
	console.log('not found');
}
}
var Converter = require("csvtojson").Converter;

//make csv globa var
var csv = 0;
var news = 0;

var intraURL = 'http://www.google.com/finance/getprices?i=300&p=30d&df=cpct&q=.INX'
function getthedata(){
request(intraURL, function(body, response, html){
	var intra_array = html.split(",");
	console.log('intra_array[5][3]'+intra_array[72]);
	//console.log(intra_array);
	var converter = new Converter({});
	//convert csv to JSON
	converter.fromString(html, function(err,result){
  
  
    csv = result;
    
    csv = JSON.stringify(csv);
    //var intra_obj[] = JSON.parse(csv);
    //console.log('1,0!:'+intra_obj[1][0])
    //console.log(csv);
	});
//console.log(response);
//console.log(csv);

})};



var cheerio = require('cheerio');

module.exports= function(app){

app.get('/test', function (req, res){

var url = 'http://www.weatheroffice.gc.ca/city/pages/bc-74_metric_e.html';


function scrape_page(url, callback){
getthedata();
//onsole.log('1,2'+ csv[1][6]);
//console.log(csv[6][2]);
//console.log(url); 
request(url, function(error, response, html, callback){
	console.log('here');	
	console.log('test');	
if(!error){
	var $ = cheerio.load(html);
	$(".wxo-metric-hide").eq(1).filter(function(callback){	
	//console.log('test2');	
	var data = $(this);
	news = data.first().text();	
	//news = 'number1';
	//console.log(news);
	
	});
  		}
	else{
	//res.send('no news');
	}
	});
//console.log(2);
callback();
//callback(news +'2');
};

function send_res(){
res.render('index.ejs' , {'temp': news, 'intra':csv});
}

scrape_page(url, send_res);

//res.render('basic_header', {);
//res.end();




});
}
