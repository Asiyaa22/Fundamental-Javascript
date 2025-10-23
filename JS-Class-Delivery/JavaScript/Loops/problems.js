
//1. Right angle star triangle
for(let i = 1; i<=4; i++){
    let rows = "";
    for(let j = 1; j<=i; j++){
        rows += "* ";
    }
    console.log(rows);
}

// 2. Right angle number triangle

for(let i = 1; i<=4; i++){
    let rows = " ";
    for(let j = 1; j<=i; j++){
        rows = j + " ";
    }
    console.log(rows);
}

//Inverted triangle
for(let i = 4; i>=1; i--){
    let rows = " ";
    for(let j = 1; j<=i; j++){
        rows += "* ";
    }
    console.log(rows);
}
