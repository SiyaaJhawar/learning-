
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = () => {
  if (xhr2.readyState === XMLHttpRequest.DONE) {
    console.log(typeof xhr2.responseText);
    console.log(xhr2.responseText);
  }
};
xhr2.open('GET', 'https://www.boredapi.com/api/activity/', true);
xhr2.setRequestHeader('Accept', 'application/json');
xhr2.send();

if (xhr2.readyState === XMLHttpRequest.DONE) {
  const res = JSON.parse(xhr2.responseText);
  console.log(res);
};
const res = JSON.parse(xhr2.responseText);
for (const key,value in res){
  if(obj.hasOwnProperty(key,value)){
    console.log(`${key} : ${res[key]}`)
    console.log(`${value} : ${res[value]}`)
  }
  
});

  



