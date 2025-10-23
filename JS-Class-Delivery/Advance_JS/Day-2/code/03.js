const radius = [1, 2, 3, 4];

function area(radius){
    return Math.PI * radius * radius;
}

function circumference(radius){
    return 2 * Math.PI * radius
}
function diameter(radius){
    return 2*radius;
}

function calculateArea(radius, x){
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(x(radius[i]))
    }
    console.log(output)
}

calculateArea(radius, area);
calculateArea(radius, circumference);
calculateArea(radius, diameter);


setTimeout(() => {
    console.log("I will run after some time")
}, 4000);

// const marks = (m, x) => {
//     console.log(m)
//     x();
// }

// function xfunc(){
//     console.log(I am akdsfhndjbf)
// }

// marks(3, xfunc)


// function calculateCircumference(radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     console.log(output)
// }
// calculateCircumference(radius);

// function calculateDiameter(radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(2 * radius[i])
//     }
//     console.log(output)
// }
// calculateDiameter(radius);




// fun problems

function orderPizza(flavor, callback) {
  console.log(`🍕 Making your ${flavor} pizza...`);
  setTimeout(() => {
    console.log(`🍕 ${flavor} pizza is ready!`);
    callback();
  }, 2000);
}

orderPizza("Cheese Burst", () => {
  console.log("😋 Eating pizza happily!");
});



function ringBell(callback) {
  console.log("🔔 Bell rings!");
  callback();
}

ringBell(() => {
  console.log("🏃 Students run to class!");
});
