 let newBtn = document.getElementById("btnAdd");
 let newInput = document.getElementById("inputFiled");
 let newContainer = document.getElementById("todoContainer");
 let removeBtn = document.getElementById("btnAdd2");

 newBtn.addEventListener("click",run);

 function run(){
    var text = document.createElement("li");
    text.innerHTML = newInput.value;
    newContainer.appendChild(text);
    
 }

 removeBtn.addEventListener("click",deletee);

 function deletee(){
    newContainer.innerHTML = "";
 }
