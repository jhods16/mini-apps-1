var http = new XMLHttpRequest();


$(document).ready(function() {
  console.log('ready!')
  submitJSON();
})
// listen for click on submit button

var submitJSON = function() {
  var text; 
  $('#submit').click((e) => {
    e.preventDefault();
    text = $('#json').val();
    post(text, () => {
      console.log('post submitted')
    });
  })
  
}
//  on submit, send post request

// display incoming CSV data from server
//  append text to the CSV_display area


// post request
//  send data in JSON format to server
//  on completion, call display handler

var post = function(content, callback) {
  http.open('POST', 'http://localhost:3000', true);
  http.setRequestHeader("Content-Type", "application/json");
  console.log(content)
  http.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log('done')
    }
  }
  http.send(content);
  callback();
}