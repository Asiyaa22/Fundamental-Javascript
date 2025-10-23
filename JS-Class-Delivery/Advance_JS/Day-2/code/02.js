function x(){
    if(true){
        var y = 10;
    }
    console.log(y);
}

x();

for(let i = 0; i<=3; i++){
    setTimeout(() => {
        console.log(i)
    })
}