const para = document.getElementById("para_1")

const btn = document.getElementById("butn")

function handleClick(size){
    return function(){
        para.style.fontSize = `${size}px`;
    }


}

let increment = handleClick(16)
btn.addEventListener("click", increment)