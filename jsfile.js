function Reset(){
    document.getElementById("number").textContent="0";
}

function Increase(){
   let number= document.getElementById("number").textContent;
  
   document.getElementById("number").textContent=  ++number ;
}

function decrease(){
    var number= document.getElementById("number").textContent;
    document.getElementById("number").textContent=number-1;
 }