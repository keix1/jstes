var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');
var server = http.createServer();
var settings = require('./settings.js');
console.log(settings + ' : ' + __dirname);
var n = 0;
var posts = [];
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');

server.on('request', function(req, res) {

    n++;
    var data = ejs.render(template, {
        title: "hello",
        content: "<strong>world!</strong>",
        n: n
    });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

});
server.listen(settings.port, settings.host);
console.log("server listening");
