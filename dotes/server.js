
var http = require('http'),
    fs = require('fs'), //ファイルシステム操作
    ejs = require('ejs'), // js的html
    qs = require('querystring'); //

var server = http.createServer();
var settings = require('./settings.js'); //ここにip等の設定書く
console.log(settings + ' : ' + __dirname);
var posts = [];
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');

function renderForm(posts, res) {
    var data = ejs.render(template, {
        posts: posts
    }); // 読み込んだテンプレートに入れ込む

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

}

server.on('request', function(req, res) {
    if(req.method==='POST') {
        req.data = "";
        req.on("data", function(chunk) {
            req.data += chunk;
        });
        req.on("end", function() {
            var query = qs.parse(req.data);
            posts.push(query.name);
            renderForm(posts,res);
        });
    } else {
        renderForm(posts, res);
    }

});
server.listen(settings.port, settings.host);
console.log("server listening");
