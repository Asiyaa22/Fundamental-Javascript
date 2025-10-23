//task 1
setTimeout(function (){
    console.log("I'm just getting started with Advanced Javascript");
}, 4000);

console.log('The Start');

function abc(){
    console.log('Hello there');
    setTimeout(function (){
        console.log('Hello World');
    }, 3000);
}

abc();
console.log('The End');