// var a = 10;

// function sum(){
//     let b = 20;
// }

// {
//     c = 40;
// }

// var - Redeclaration
        //  Reassignment
        //global scope
        // function
        //block scope 
// let - Redeclaration
     //  Reassignment
        //global scope
        // function
        //block scope 
        
//const -
// console.log(a);
var a = 10;
function sum(){
    var b = 20;
    var c = 30;
    var d = b + c;
    console.log(a);
    console.log(d);
}
sum();
// console.log(b);

// {
//     let e = 40;
// }
// console.log(e);

// let name = "barabari";
// console.log(name);

// let name = "barabari"

// 

//1 question
var name = "john";
name = "paul"

console.log(name);

// 2 question
let name = "priya";
{
    console.log(name);
}

//3 question
let str = "123";
let num = Number(str);
console.log(typeof(str));
console.log(typeof(num));
console.log("Number:", num);

let n = 456;
let str2 = String(n);
console.log(str2);