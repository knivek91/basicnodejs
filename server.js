var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//ruteo 
app.get('/',function(req, resp) {
	resp.sendFile(__dirname + '/view/index.html');
});

//escuchar
app.listen(9090);