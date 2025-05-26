 let btn = document.querySelector("button");
 let ul = document.querySelector("ul");
 let ipt = document.querySelector("input");

 btn.addEventListener("click", function() {    
    let item = document.createElement("li");   
    item.innerText = ipt.value;                

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);                      
    ipt.value = "";                            
 });
  
  ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {    
     let ListItem = event.target.parentElement;
      ListItem.remove();
     console.log("deleted");                     
   }  
    
  });
