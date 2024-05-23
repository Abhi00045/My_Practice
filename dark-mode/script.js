let toggled = document.getElementById("container");
let ids=document.querySelector("body");
let h1=document.querySelector("h1");

function changed(){
    toggled.classList.toggle("active");
     ids.classList.toggle("active");
}
toggled.addEventListener("click",changed);

