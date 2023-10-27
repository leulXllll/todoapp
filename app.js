function add(){
    let counter = 0;
   
    let div = document.createElement('div')
div.innerHTML = " <input type='checkbox' class='check'><input type='text'  placeholder='write your text here' class='inpu1'> <input value='Delete' type='button' class='btn2' onclick='remove()'>"
  let place = document.querySelector(".place")
 place.append(div) 
 

    
    
}
function remove(){
  
  let del = document.querySelector('input')
   del.remove()

}

