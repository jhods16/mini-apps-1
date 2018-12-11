var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(express.static('client'))
app.use(bodyParser.json())


// respond to get request
app.get('/', (req, res) => {
  console.log('hi')
})

// respond to post request
app.post('/', (req, res) => {
//  receive incoming data
//  convert to CSV
  jsonToCSVConverter(req.body, (result) => {
//  send back CSV data
    console.log(result);
    res.send(result)
  })
  
})
//  send back empty form?
app.listen(port, () => {
  console.log(`listening on ${port}`);
})
// build server


var jsonToCSVConverter = function(json, callback) {
  var CSV = '';
  // generate string of keys separated by commas
  var keys = Object.keys(json);
  keys.pop();

  for (var i = 0; i < keys.length-1; i++) {
    CSV += keys[i] + ',';
  }
  CSV += keys[keys.length-1];

  var mapJSONToString = function(json) {
    var vals = '';

    if (json.children.length === 0) {
        CSV += '\n' + stringBuilder(json, keys);
    } else {
      CSV += '\n' + stringBuilder(json, keys);
      for (var i = 0; i < json.children.length; i++) {
        mapJSONToString(json.children[i]);
      }
    }
  }
  mapJSONToString(json)
  callback(CSV);
}

var stringBuilder = function(json, keys) {
  var result = '';
  for (var i = 0; i < keys.length-1; i++) {
    result += json[keys[i]] + ',';
  }
  result += json[keys[keys.length-1]];
  return result;
}