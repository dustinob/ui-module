var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/other', function (req, res) {
	res.render('other', {title: 'Yo', message: 'Whats Good?'});
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});