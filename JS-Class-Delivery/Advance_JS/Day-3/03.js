function createOrder(product, callback) {
  console.log("Creating order for:", product);
  setTimeout(() => {
    let orderId = Math.floor(Math.random() * 1000);
    callback(orderId);
  }, 1000);
}

function proceedToPayment(orderId, callback) {
  console.log("Proceeding to payment for order:", orderId);
  setTimeout(() => {
    let paymentId = "PAY" + orderId;
    callback(paymentId);
  }, 1000);
}

function showOrderDetails(paymentId, callback) {
  console.log("Fetching order details for payment:", paymentId);
  setTimeout(() => {
    callback({ status: "Success", paymentId, date: new Date().toLocaleString() });
  }, 1000);
}

// ❌ Callback Hell (nested)
createOrder("Laptop", (orderId) => {
  proceedToPayment(orderId, (paymentId) => {
    showOrderDetails(paymentId, (details) => {
      console.log("Order Completed:", details);
    });
  });
});




function createOrder(product) {
  return new Promise((resolve) => {
    console.log("Creating order for:", product);
    setTimeout(() => {
      let orderId = Math.floor(Math.random() * 1000);
      resolve(orderId);
    }, 1000);
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    console.log("Proceeding to payment for order:", orderId);
    setTimeout(() => {
      let paymentId = "PAY" + orderId;
      resolve(paymentId);
    }, 1000);
  });
}

function showOrderDetails(paymentId) {
  return new Promise((resolve) => {
    console.log("Fetching order details for payment:", paymentId);
    setTimeout(() => {
      resolve({ status: "Success", paymentId, date: new Date().toLocaleString() });
    }, 1000);
  });
}

// ✅ Clean Promise Chain
createOrder("Laptop")
  .then(orderId => proceedToPayment(orderId))
  .then(paymentId => showOrderDetails(paymentId))
  .then(details => console.log("Order Completed:", details))
  .catch(err => console.log("Error:", err));
