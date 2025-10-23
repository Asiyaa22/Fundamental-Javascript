// async function dineIn() {
//   await orderFood();
//   await serveFood();
//   await eatFood();
//   console.log("✅ Done eating!");
// }

// dineIn();

// const promise = new Promise((resolve, reject) => {
//    resolve(console.log("Promise resolved"));

// })

// order creation
// proceed to payment
// show order details
// shipmeny details

// const cart = ["shoes", "shirt", "Scarf"]


// function validateCart(cart){
//     return true;
// }

// function createOrder(cart){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!validateCart(cart)){
//                 const err = new Error("Cart is not valid")
//                 reject(err);
//             }else{
//                 const orderId = 2343;
//                 resolve(orderId)
//             }
//         }, 4000);
//     })
//     return promise;
// }

// const p = createOrder(cart)
// console.log("I am p", p)

// function findOrderId(orderId){
//     return true;
// }

// function payment(orderId){
//    const promise = new Promise((resolve, reject) => {
//     if(!findOrderId(orderId)){
//         const err = new Error("Invalid orderID")
//         reject(err);
//     }else{
//         resolve(console.log("Payment is done!!"))
//     }
//    })
//    return promise;
// }

// p.then((orderId) => {
//     console.log(orderId)
// }).then(orderId => {
//     payment(orderId)//paymrnmty
// }).then(showorderDEtails()).then(shipmentDeta())
// .catch((err) => {
//   console.log(err.message)
// })






