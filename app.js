let express = require("express");
let bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.json());
app.post('/' + (process.env.KEY || 'test'), function (req, res) {

    console.log(req.headers);
    console.log(req.body);
    res.send('OK');
});

app.all('*', function(req, res){
    res.send('Access denied');
});

app.listen(6660);