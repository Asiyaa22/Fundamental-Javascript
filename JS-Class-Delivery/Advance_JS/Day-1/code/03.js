//task 9
const arr = [10,20,30,40];

for(let i = 0; i<4; i++){
    setTimeout(()=>{
        console.log(arr[i-2]);
    }, 4000);
    //console.log(i);
}

// console.log(i);