var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
var fs = require("fs");

app.get('/api/getUsers', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

app.post('/api/login', function(req, res) {
  console.log(req.body);
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    result = Object.values(data).find(user => user.username == req.body.username);
    if (result != undefined && result.password == req.body.password) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
})

app.post('/api/register', function (req, res) {
  console.log(req.body);
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    let id = parseInt(Object.keys(data).pop()) + 1;

    data[id] = req.body;
    console.log(data);
    fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(data), (err) => {
      if (err)
        console.log(err);
      else {
        console.log(fs.readFileSync(__dirname + "/" + "users.json", 'utf8', "utf8"));
      }
    });
    res.sendStatus(200);
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})