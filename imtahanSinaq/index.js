
const bar = document.querySelector(".icon-bar")
const Xicon = document.querySelector("#X-icon")
const respList = document.querySelector("#responsive-list")
const iconArrow = document.querySelector(".icon-arrow")
const iconArrow2 = document.querySelector(".icon-arrow2")
const opacty = document.querySelector(".opacty");

bar.addEventListener(("click"), () => {
    respList.style.width = "300px"
    console.log("salam")
    opacty.style.display = "block";
})
Xicon.addEventListener(("click"), () => {
    respList.style.width = "0px"
    console.log("salam")
    opacty.style.display = "none";
})
iconArrow.addEventListener(("click"), () => {
    console.log("salam")
    let add = document.getElementById("dropOne-res")
    console.log(add)
    add.classList.toggle("open1")
    let trans=document.getElementById("ox")
    trans.classList.toggle("transform")
   console.log(add.classList[0]);
   if ( add.classList[0]==="open3") {
    add.classList.remove("open3")
   }
})
iconArrow2.addEventListener(("click"), () => {
    console.log("salamm")
    let add2 = document.getElementById("dropTwo-res")
    add2.classList.toggle("open2")

    let add = document.getElementById("dropOne-res")
    console.log(add)
    add.classList.toggle("open3")

    let trans2=document.getElementById("ox2")
    trans2.classList.toggle("transform")
})
