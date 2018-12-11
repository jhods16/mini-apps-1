var express = require('express');
var app = express();
var port = 3000;
app.use(express.static('client'))


// respond to get request
app.get('/', (req, res) => {
  // res.send('client/index.html');
})

// respond to post request
app.post('/', (req, res) => {
//  receive incoming data
  jsonToCSVConverter(req.body, (result) => {
    res.send(result)
  })
//  convert to CSV 
//  send back CSV data
  
})
//  parse?
//  send back empty form?
app.listen(port, () => {
  console.log(`listening on ${port}`);
})
// build server


var jsonToCSVConverter = function(json, callback) {
  var CSV = '';
  // generate string of keys separated by commas
  var keys = Object.keys(json);

  for (var i = 0; i < keys.length-2; i++) {
    CSV += keys[i] + ',';
  }
  CSV += keys[keys.length-2];
  callback(CSV);
}

var getKeys = function(json) {

}