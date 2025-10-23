let promise = new Promise((res, rej) => {
    res("Hey I am the value");
})
console.log(promise);

async function sayHello(){
   let value = await promise;
   console.log(value);
//    return value;
}
sayHello()
// console.log(sayHello())