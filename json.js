var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.coinbase.com/v2/currencies",true);

 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
        console.log(result);
        if(Array.isArray(result)){
      for (var i = 0; i < result.length; i++) {
    console.log(result[i]);

}
            
        }else{
            for(var key in result){
                console.log(key + ': '+ result[key]);
            }
        }
    }
};
 xhr.send();








 


  
                              










