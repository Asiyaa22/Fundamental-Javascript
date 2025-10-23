// let count = 0;
// for(let i = 0; i<5; i++){
//     let temp = '';
//     for(let j = 0; j<5; j++){
//         count++;
//         temp = temp + count + ' ';
//     }
//     console.log(temp);
// }

//outer loop - control no. of rows
// for(let i = 1; i<=4; i++){
//    let rows = " ";
//    for(let j = 1; j<=i; j++){
//       rows += j + " "; 
//    }
//    console.log(rows);
// }

// i = 1, j = 1 ,row = "*"
// i = 2, row = "", j=1, row="*", j=2, row= "* *"
// i = 3, row = "", j =1, row= "*", j = 2, row = "* *", j = 3, row = "* * *"

// *
// * *

1
12
123
1234
12345

// for(let i = 10; i>=1; i--){
//     let rows = " ";
//     for(let j = 1; j<=i; j++){
//         rows += "$ ";
//     }
//     console.log(rows);
// }

1234
123
12
1


let stars = '';
for(let i=5; i>0; i--) {
    let rows = '';
    stars+="*"
    for(let j=0; j<i; j++) {
        rows+= ' ' 
    }
    console.log(rows+stars);
}  

