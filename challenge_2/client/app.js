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
// display incoming CSV data from server
//  append text to the CSV_display area
      var lines = result.split('\n');
      for (var i = 0; i < lines.length; i++) {
        $('.CSV_display').append(`<div class=${i}>${i+1}: ${lines[i]}<div>`);
      }
    });
    $( 'form' ).each(function(){
        this.reset();
    });
  }) 
}

// post request
var post = function(content, callback) {
  http.open('POST', 'http://localhost:3000', true);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //  on completion, call display handler
      callback(http.response)
    }
  }
  http.send(content);
}