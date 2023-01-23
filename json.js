

const xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = () => {
  if (xhr2.readyState === XMLHttpRequest.DONE) {
    console.log(typeof xhr2.responseText);
    console.log(xhr2.responseText);
  }
};
xhr2.open('GET', 'https://www.boredapi.com/api/activity', true);
xhr2.setRequestHeader('Accept', 'application/json');
xhr.send(null);
if (xhr2.readyState === XMLHttpRequest.DONE) {
  const res = JSON.parse(xhr2.responseText);
  console.log(res);
};
const res = JSON.parse(xhr2.responseText);
Object.entries(res).forEach((entry) => {
  const [key, value] = entry;
  console.log(`${key}: ${value}`);
});
