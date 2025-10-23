//code trace

setTimeout(() => {
    console.log("timer")
}, 5000);

function x(y){
    console.log("x")
    y();
}

x(function y(){
    console.log("y")
})


//ecomerce website

const cart = ['lipstick', 'bags', 'heels'];

// api.createOrder(function x(){
//   api.preoceedToPayment(function y(){
//     api.showorderDetails(function z(){
//     api.shipmentDetails()
//      }) 
//    })
// })



// function createOrder(cart){
//     // cart;
//     // try{
//         // geneerate order Id 
//         // return order ID;
//     // }
//     // catch(error){
//     //     return error
//     // }
//     //then go to payment gateway proceedTO patymrent method
// }

// let first_promise = createOrder(cart);

// first_promise.then(payment()
  
// )

// let promise = new Promise(function (myresolve, myreject) {
    //producing code - it may take some time
    //all the logic of order creation 
// })































