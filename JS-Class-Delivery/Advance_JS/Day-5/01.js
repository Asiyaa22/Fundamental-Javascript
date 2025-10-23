const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 5000)
})
console.log("Hellp world")

async function getData(){
    let value = await promise;
    console.log(value)
    console.log("Hello hhiiii")
}

getData()
console.log("I AM here also")
