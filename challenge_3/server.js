var express = require('express');
var db = require('./database');
var bodyParser = require('body-parser')
var app = express();
var port = 3000;
app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('recevied')
})

app.post('/create', (req, res) => {
  console.log('post', req.body)
  db.create((id) => {
    res.send(id)
  })
})

app.post('/update', (req, res) => {
  console.log(req.body.id)
  db.update(req.body.id, req.body, (user) => {
    console.log(user)
    res.send(user);
  })
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})


