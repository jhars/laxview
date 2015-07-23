var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
    mongoose = require('mongoose'),
    UserPost = require("./models/userPost"),
    TeamsFollowPost = require('./models/TeamsFollowPost');

//------------Linking to Public Folder------//
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
//----Connects to localhost to Database------//
mongoose.connect('mongodb://localhost/laxdb');



//--------------SEED DATA (JSON)----------------//

//----------------------ROUTES---------------------//

//-----------------ROOT Route---------------------//
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

//POST ROUTE TO FOLLOW TEAMS




//POST ROUTE TO ADD NEW USER (AUTH)


app.listen(process.env.PORT || 8081)
console.log('Magic happens on port 8081');
exports = module.exports = app;