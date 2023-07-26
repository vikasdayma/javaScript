// const class1 =document.getElementById("Vikas");
// console.log(class1.textContent);
// class1.textContent="something";
// console.log(class1);
// class1.style.color="blue";
// class1.style.backgroundColor="red";
// const div =getElementById("tushar");
// // div.style.backgroundColor="black";
// const ram =document.querySelector("a");
// console.log(ram.getAttribute("href"));
// ram.setAttribute("href","http://127.0.0.1:5500/index2.html")
// console.log(ram);
// const lisst =document.getElementsByClassName("nav-item");
// console.log(lisst[2])
// lisst[1].textContent="Surprise";
// lisst[3].style.color="red";
const rootNode = document.getRootNode();
const htlmElements = (rootNode.childNodes[1]) ;
console.log(htlmElements)
  const alpha = (htlmElements.childNodes[2]);
  console.log(alpha)

  const beta=(alpha.childNodes[0]);
  beta.style.color="Red"
  beta.textContent="mohan"
  console.log(beta)
  
   
  

 



