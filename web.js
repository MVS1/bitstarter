var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
response.send('Hello World2!');
});
fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
