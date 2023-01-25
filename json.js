var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.boredapi.com/api/activity", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();

 


  
                              










