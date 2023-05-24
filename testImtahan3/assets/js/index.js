const barIcon = document.querySelector(".barIcon");
const Xicon=document.querySelector(".Xicon")
const clickBarIcon = document.querySelector(".clickBarIcon");


barIcon.addEventListener("click",()=>{
    console.log("salam")
    clickBarIcon.classList.toggle("barIconNav")
})

Xicon.addEventListener(("click"),()=>{
clickBarIcon.classList.remove("barIconNav")
})