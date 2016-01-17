/**
 * Created by Nicholas on 1/17/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
    json = require('./movies.json'),
    app = express();

app.set('port', process.env.PORT || 3500);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var router = new express.Router();
// TODO: Set up endpoints
app.use('/', router);

var server = app.listen(app.get('port'), function(){
    console.log('Server up: http://localhost:' + app.get('port'));
});