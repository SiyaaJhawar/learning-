var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomuser.me/api/",true);
xhr.send();
//xhr.open("GET", "https://www.boredapi.com/api/activity",true);
//xhr.send();
 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
        console.log(result);
    
    for (var key in result) {
        if (result.hasOwnProperty(key)) {
            var val = result[key];
          console.log(result.hasOwnProperty(key));
           if (Array.isArray(val)) {
                val.forEach(function(item) {
                    for (var k in item) {
                       if (item.hasOwnProperty(k)) {
                         console.log(item.hasOwnProperty(k));
                           console.log(k + ": " + item[k]);
                        }else {
        console.log(item.hasOwnProperty(k));
      }
                     
                   }
               });
           } else {
                console.log(key + ": " + val);
            }
        }
    }
}
};







  
                              










