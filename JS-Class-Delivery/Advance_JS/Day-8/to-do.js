//Currying assignment


// Q1. Multiply Function

// Create a curried function multiply(a)(b)(c) that multiplies three numbers.

// console.log(multiply(2)(3)(4)); // 24



// Q2. Personalized Greeting

// Write a curried function greet(greeting)(name) that returns:

console.log(greet("Hello")("Asiya")); // Hello, Asiya!


// Q3. Filter with Currying

// Write a curried function greaterThan(limit)(number) that checks if a number is greater than the limit.

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15)); // true
console.log(greaterThan10(8));  // false


// 👉 Convert the following normal function into a curried version:

function calculateTotal(price, tax, discount) {
  return price + (price * tax) - discount;
}

