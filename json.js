var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.boredapi.com/api/activity",true);
 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        console.log(result);
   var result = JSON.parse(this.responseText);
     Object.keys(result).forEach(function(key) {
    console.log(key + ": " + result[key]);
});
}
    };

 
xhr.send();

 


  
                              










