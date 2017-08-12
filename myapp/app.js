var express = require('express'),
    app = express();

    app.use(app.router);
    
    app.get('/', function(req, res) {
        res.send('hello world');
    });

    app.listen(3000);
