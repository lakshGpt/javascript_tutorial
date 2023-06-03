// xhr using promises
const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("something went wrong"));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Something went wrong"));
    };

    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    return data[3].id;
  })
  .then((id) => {
    const url2 = `${URL}/${id}`;
    // console.log(url2);
    return sendRequest("GET",url2);
  })
  .then(newResponse => {
    const newData = JSON.parse(newResponse);
    console.log(newData);
  })
  .catch( error => {
    console.log(error);
  })
