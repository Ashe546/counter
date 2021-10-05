

let y = document.getElementById("num1").innerHTML

function reset() {
    document.getElementById("num1").innerHTML = 0 

    y = 0  
    document.getElementById("num1").style.color = "black" 

    document.getElementById("num").style.display = "none"
}



function inc() {  

for(let i = 0 ; i < 1; i++){
y += 1
document.getElementById("num1").innerHTML = y


}
if(y < 0){
    document.getElementById("num1").style.color = "red" 
}else{
    document.getElementById("num1").style.color = "green" 
}
document.getElementById("num").style.display = "none"

}
function dec() {  

for(let i = 0 ; i < 1; i++){
y -= 1
document.getElementById("num1").innerHTML = y
}

if(y < 0){
    document.getElementById("num1").style.color = "red" 
}else{
    document.getElementById("num1").style.color = "green" 
}

document.getElementById("num").style.display = "none"

}

console.log(y)

