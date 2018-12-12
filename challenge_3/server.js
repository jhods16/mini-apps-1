var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) => {
  res.send('recevied')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})


