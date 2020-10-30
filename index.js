var express = require('express');
var app = express();
var helmet = require('helmet')

var router = require('./router/main')(app);

app.use(express.static('public'));
app.set('views', __dirname + '/public')
app.use(helmet())
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })
  
