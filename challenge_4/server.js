var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('client/dist'));

app.listen(port, (err) => {
  if (err) return console.error(err);
  console.log(`listening on ${port}!`);
})