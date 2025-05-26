 let btn = document.querySelector("button");
 let ul = document.querySelector("ul");
 let ipt = document.querySelector("input");

 btn.addEventListener("click", function() {    //1. button ko click karte hi
    let item = document.createElement("li");   //2. new item create honge
    item.innerText = ipt.value;                //3. jo item hai wo input value me jayenge

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);                      //4. phir ul list me item add honge
    ipt.value = "";                            //5. add hone ke bd input box khali ho jayega
 });
  
  ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {    // click karne ke bd batata hai ki hamara target konsa tha
     let ListItem = event.target.parentElement;
      ListItem.remove();
     console.log("deleted");                     // jab delete node name BUTTON hoga tabhi delete karna hai
   }  
    
  });

 //let delBtns = document.querySelectorAll(".delete");
 // for(delBtn of delBtns) {
 //  delBtn.addEventListener("click", function(){    // delete ko click karne ke bd
 //    let par = this.parentElement;               // delete btn ke parent element ko delete karega i.e item
 //    console.log(par);
 //    par.remove();
 //  });
 // }