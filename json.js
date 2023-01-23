
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(typeof xhr.responseText);
    console.log(xhr.responseText);
  }
};
xhr.open('GET', 'https://www.boredapi.com/api/activity/', true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);
if (xhr.readyState === XMLHttpRequest.DONE) {
  const res = JSON.parse(xhr.responseText);
  console.log(res);
};
const res = JSON.parse(xhr.responseText);

for (const key in res){
  if(obj.hasOwnProperty(key)){
    console.log(`${key} : ${res[key]}`)
  }
}
