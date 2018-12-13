var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  var kittySchema = new mongoose.Schema({
    name: String
  });

  var Kitten = mongoose.model('Kitten', kittySchema);

  var tigerlily = new Kitten ({name: 'Tigerlily'});

  tigerlily.save((err, tigerlily) => {
    if (err) return console.error(err);
    console.log(tigerlily.name);
  })

  Kitten.find((err, kittens) => {
    if (err) return console.error(err);
    console.log(kittens[0].name);
  })
  // console.log(tigerlily.name);
});