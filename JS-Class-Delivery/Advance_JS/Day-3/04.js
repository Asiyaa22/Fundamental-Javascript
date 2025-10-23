let promise = new Promise((resolve, reject) => {
    let num = Math.random();//generates a random number between 0 to 1
    if (num > 0.5) {
        resolve("Success! Number:" + num)
    } else {
        reject("Failed! Number:" + num);
    }
});
promise
    .then(result => console.log("resolved:", result))
    .catch(error => console.log("Rejected:", error))