// promise and settimeout

// i want to resolve/reject promise after 2 seconds

function myPromise() {
  const value = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

myPromise()
    .then(()=>{
        console.log("resolved");
    })
    .catch(()=>{
        console.log("rejected");
    });
