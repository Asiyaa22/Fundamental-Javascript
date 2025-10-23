// 


let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This message appears after 6 seconds");
  }, 6000);
});

console.log(promise3)

promise3.then(result => console.log(result));