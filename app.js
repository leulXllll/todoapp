let counter = 0;
function add(){
    
   if (counter<8){
    let div = document.createElement('div')
div.innerHTML = ` <div id='inputId'><input type='checkbox' class='check'><input type='text'  placeholder='write your text here' class='inpu1'></div>`
  let place = document.querySelector(".place")
 place.append(div) 
 

   }
   counter++
    
}
function remove(inputId) {
  const div = document.getElementById(inputId);

    div.remove(); // Remove the entire div container
  
}



