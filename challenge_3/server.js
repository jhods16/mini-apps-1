var express = require('express');
var db = require('./database');
var app = express();
var port = 3000;
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('recevied')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})


