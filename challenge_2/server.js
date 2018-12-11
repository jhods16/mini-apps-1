var express = require('express');
var app = express();
var port = 3000;
app.use(express.static('client'))


// respond to get request
app.get('/', (req, res)=> {
  // res.send('client/index.html');
})
//  send index.html


// respond to post request
//  receive incoming data
//  parse?
//  convert to CSV 
//  send back CSV data
//  send back empty form?
app.listen(port, () => {
  console.log(`listening on ${port}`);
})
// build server
