var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/users/",true);

 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
        console.log(result);
        if(Array.isArray(result)){
        result.forEach(function(item) {
    console.log(item);
});
            }
        }else{
            for(var key in result){
                console.log(key + ': '+ result[key]);
            }
        }
    }
};
 xhr.send();








 


  
                              










