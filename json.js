const xhr2= new XMLHttpRequest();
xhr2.open("GET", "https://www.boredapi.com/api/activity", true);
xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
        console.log(xhr2.responseText);
         var response = JSON.parse(xhr2.responseText);
    }
};
xhr2.send();

 


  
                              










