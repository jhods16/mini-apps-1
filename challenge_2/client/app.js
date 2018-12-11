var http = new XMLHttpRequest();


$(document).ready(function() {
  console.log('ready!')
  submitJSON();
})
// listen for click on submit button
//  on submit, send post request
var submitJSON = function() {
  var text; 
  $('#submit').click((e) => {
    e.preventDefault();
    text = $('#json').val();
    post(text, (result) => {
      $('.CSV_display').append(result);
    });
  })
  
}

// display incoming CSV data from server
//  append text to the CSV_display area


// post request
//  send data in JSON format to server
//  on completion, call display handler

var post = function(content, callback) {
  http.open('POST', 'http://localhost:3000', true);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      callback(http.response)
    }
  }
  http.send(content);
}