// 👨‍🏫 == vs === (Equality vs Strict Equality)

let a = 10;
let b = '10';

// == checks for value equality (type coercion allowed)
console.log(a == b);    // true → because '10' gets converted to number 10

// === checks for value **and** type equality (no coercion)
console.log(a === b);   // false → because one is number, one is string

// 💡Tip: Always prefer === to avoid unexpected behavior due to type coercion

// ---------------------------------------------

// 🔁 Pre-increment vs Post-increment / decrement
let x = 10;

console.log("++x", ++x);   // 11 → x is incremented *before* the value is used
console.log("x++", x++);   // 11 → value is used first, then incremented (x becomes 12 after this line)
console.log("--x", --x);   // 11 → x decremented before use (x becomes 11)
console.log("x--", x--);   // 11 → value used first, then decremented (x becomes 10)
console.log("x", x);       // 10 → reflects final value after above operations
console.log("++x", ++x);   // 11 → again increment before use
console.log("x", x);       // 11 → final value

// 🧠 Practice Tip:
// Try the same operations with y = 5 and track how the value changes line by line

// ---------------------------------------------

// ❗ != vs !== (Not Equal vs Strict Not Equal)
let p = 5;
let q = "5";

console.log(p != q);    // false → values are same after coercion
console.log(p !== q);   // true → types are different (number vs string)

// ❓ Why does JS allow this?
// Because JavaScript is loosely typed and tries to convert values automatically (type coercion)

// ---------------------------------------------


let isLoggedIn = false;
let hasPermission = true;

console.log(isLoggedIn && hasPermission);  // false
console.log(isLoggedIn || hasPermission);  // true
console.log(!isLoggedIn);                  // true

// Try changing values to true/false and observe the result.
// 💬 Question: What will happen if both are false?
