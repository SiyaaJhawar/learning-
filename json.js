
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'https://www.boredapi.com/api/activity/', true);
xhr2.setRequestHeader('Accept', 'application/json');
xhr2.send(null);

if (xhr2.readyState === XMLHttpRequest.DONE) {
  const res = JSON.parse(xhr2.responseText);
  console.log(res);
  for (const key,value in res){
  if(obj.hasOwnProperty(key)&& obj.hasOwnProperty(value){
    console.log(`${key} : ${res[key]}`)
    console.log(`${value} : ${res[value]}`)
  }
}
  



