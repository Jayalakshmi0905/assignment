let h1Element= document.createElement("h1");
h1Element.textContent="web technology";
console.log(h1Element);
document.body.appendChild(h1Element);
let containerElement=document.getElementById("container");
containerElement.appendChild(h1Element);
let buttonElement=document.createElement("button");
buttonElement.textContent="change heading"
containerElement.appendChild(buttonElement);
buttonElement.onclick=function() {
    h1Element.textContent="6.0 technologies";
    h1Element.classList.add("heading");
}