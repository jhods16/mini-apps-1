var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb!')
});

var demographics = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  cc: String,
  exp: String,
  cvv: String,
  billzip: String
})

var Demographics = mongoose.model('Demographics', demographics);

// var jess = new Demographics ({name: 'Jess', email: 'myemail.com', line1: '1110 Stannage'})
var harry = new Demographics ({})

// jess.save((err, jess) => {
//   if (err) return console.error(err);
//   console.log(jess.name)
// })
// Demographics.deleteMany({}, (err) => {
//   if (err) return console.error(err)
// })

Demographics.find((err, demos) => {
  if (err) return console.error(err);
  console.log(demos);
})


module.exports. create = function(callback) {
  var user = new Demographics({})

  user.save((err, user) => {
    callback(user.id)
  })
}

// function that takes in state props as parameters
// and updates the entry for that person

module.exports.update = function(id, state, callback) {
  Demographics.findByIdAndUpdate(id, state, (err, user) => {
    if (err) return console.error(err);
    callback(user)
  })
}