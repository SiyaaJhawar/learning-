
var getJSON = function(url, callback) {

    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xmlhttprequest.responseType = 'json';

    xmlhttprequest.onload = function() {

        var status = xmlhttprequest.status;

        if (status == 200) {
            callback(null, xmlhttprequest.response);
        } else {
            callback(status, xmlhttprequest.response);
        }
    };

    xmlhttprequest.send();

  };
console.log(`The request URL was: ${xmlhttprequest.response}`)
 getJSON('https://jsonplaceholder.typicode.com/todos/1',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {

       var display = `User_ID: ${data.userId}
ID: ${data.id}
Title: ${data.title} 
Completion_Status: ${data.completed}`;
    }
  console.log(display);
});




  
                              










