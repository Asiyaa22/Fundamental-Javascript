//promises practise

let promise = new Promise((resolve) => {
  resolve("Task completed!");
});

promise.then(result => console.log(result));



//task - 2
let promise2 = new Promise((resolve, reject) => {
  resolve("Hello Students!");
});

promise.then(result => console.log(result));


//task - 3

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This message appears after 2 seconds");
  }, 2000);
});

promise.then(result => console.log(result));



// task - 4

let promise4 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num > 0.5) {
    resolve("Lucky! Number: " + num);
  } else {
    reject("Unlucky! Number: " + num);
  }
});

promise.then(result => console.log("Resolved:", result));


