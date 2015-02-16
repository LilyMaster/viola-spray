var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname)); // app.use(express.static(__dirname + '/public'));


/*app.get('/', function(request, response) {
response.send('Hello World!');
});*/

app.listen(app.get('port'), function() {
console.log("Node app is running at localhost:" + app.get('port'));
});

/*var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
console.log("Node app is running at localhost:" + app.get('port'));
});*/