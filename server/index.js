const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const router = require('./resources/router');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', router);

app.listen(port, function(err) {
  if (err) {
    console.log('Something went wrong!');
  }
  console.log('Listening on port ' + port);
});
