const checkbox = document.getElementById("check")
const input = document.getElementById("input")

checkbox.addEventListener("change",function(){

if(checkbox.checked){
    input.classList.add("h1")
}


})