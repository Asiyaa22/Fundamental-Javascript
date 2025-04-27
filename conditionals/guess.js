//1
// let x = 10;
// if (x > 5) {
//   console.log("Greater than 5");
// } else {
//   console.log("5 or less");
// }

//2
let marks = 72;

if (marks > 90) {
  console.log("Grade A");
} else if (marks > 75) {
  console.log("Grade B");
} else if (marks > 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}


//3
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }


//4
// let j = 5;
// do {
//   console.log(j);
//   j++;
// } while (j < 5);


//5
// for (let k = 1; k <= 3; k++) {
//     console.log("Count: " + k);
//   }

//6
// let age = 20;
// let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result);


// 🔥 FizzBuzz Basic:
// Question:
// Write a program that takes a number and:

// Prints "Fizz" if the number is divisible by 3,
//one condition based on this condition we have to print fizz

// Prints "Buzz" if the number is divisible by 5,
//anihter condition if num then print buzz

// Prints "FizzBuzz" if the number is divisible by both 3 and 5,
//again condition

// Otherwise, prints the number itself.
let num = 10;
if(num % 2 === 0 && num % 5 === 0 ){
    console.log("FizzBuzz")
}else if(num % 2 === 0){
    console.log("Fizz");
}else if(num % 5 === 0){
    console.log("Buzz");
}else {
    console.log(num);
}