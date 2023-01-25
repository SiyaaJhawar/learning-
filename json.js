var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.boredapi.com/api/activity",true);
 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        console.log(result);
     for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}
    }
};
 
xhr.send();

 


  
                              










