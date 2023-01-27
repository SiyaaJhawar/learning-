var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/users/",true);
xhr.send();
 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
        console.log(result);
    
    for (var key in result) {
        if (result.hasOwnProperty(key)) {
            var val = result[key];
            if (Array.isArray(val)) {
                val.forEach(function(item) {
                    for (var k in item) {
                        if (item.hasOwnProperty(k)) {
                            console.log(k + ": " + item[k]);
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







  
                              










