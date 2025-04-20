//📘JavaScript Operators
// 🧠What are Operators?
// Operators are special symbols in JavaScript that are
// used to perform operations on values and variables.
// They help us compute, compare, assign, and manipulate
// data.

//🔹 Types of Operators in JavaScript

//1. Arithmetic Operators
// Used to perform mathematical calculations.

let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (Remainder): 1
console.log(a ** b); // Exponentiation: 1000

console.log("a++ post increment:",a++) // Post-Increment
console.log("++a pre increment:",++a) // Pre-Increment
console.log("--a pre decrement:",--a) // Pre-decrement
console.log("a-- post decrement:",a--) // Pre-decrement


//2. Assignment Operators
// Used to assign values to variables.

let x = 5;

x += 2; // x = x + 2
x -= 1; // x = x - 1
x *= 3; // x = x * 3
x /= 2; // x = x / 2
x %= 2; // x = x % 2

//3. Comparison Operators
// Used to compare two values.

let c = 5;
let d = "5";

console.log(c == d);  // true (loose equality)
console.log(c === d); // false (strict equality)
console.log(c != d);  // false
console.log(c !== d); // true
console.log(c > 3);   // true
console.log(c < 3);   // false
console.log(c >= 5);  // true
console.log(c <= 4);  // false

//4. Logical Operators
// Used to combine multiple conditions.

let age = 20;

console.log(age > 18 && age < 25); // true
console.log(age > 30 || age < 25); // true
console.log(!(age < 18));          // true

//5. String Operators
// Used to join strings.

let firstName = "Asiya";
let lastName = "Farhath";

console.log(firstName + " " + lastName); // "Asiya Farhath"

//6. Bitwise Operators
// Bitwise operators work directly on the binary
// representation of numbers. Numbers are converted into
// 32-bit signed integers, and the operations are 
// performed bit by bit.

//Types of Bitwise Operators in JavaScript

// 1. AND (&)

// Returns 1 only if both bits are 1. 
   console.log(5 & 3); //1
// 0101 & 0011 = 0001

//2. OR (|)
// Returns 1 if either bit is 1.

console.log(5 | 3) // 7
// 0101 | 0011 = 0111

//3. XOR (^)
// Returns 1 if bits are different.

console.log(5 ^ 3) // 6
// 0101 ^ 0011 = 0110

//5. Left Shift (<<)
//Shifts bits to the left, filling with zeros.

console.log(5 << 1) //10
//00000000000000000000000000000101 << 1 = 00000000000000000000000000001010

// 6. Right Shift (>>)
// Shifts bits to the right, preserving sign bit (for negative numbers).

console.log(5 >> 1) //2
//Solve this

// 4. NOT (~)
// Flips all bits — turns 0 to 1 and 1 to 0.
// it flips every bit (0 → 1 and 1 → 0)

console.log(~5) //-6
//~00000000000000000000000000000101 = 11111111111111111111111111111010


