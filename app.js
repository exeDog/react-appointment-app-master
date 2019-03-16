/**
 * Created by Priyankrege on 10/12/2017.
 */
var express = require('express'),
    nunjucks = require('nunjucks'),
    app = express();

app.set('views','./builds/app');
app.set('views engine','html');
var env = nunjucks.configure('./builds/app',{
    autoescape: true,
    express : app
});

app.engine('html',nunjucks.render);

var port = process.env.PORT || 5000;
app.set('port', port);


app.use('/js',express.static('./builds/app/js'));
app.use('/css',express.static('./builds/app/css'));


app.get('/',function (req,res) {
    res.render('index.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


