const BoxsOurExportTeam=document.querySelector(".Boxs-OurExportTeam")
BoxsOurExportTeam.className=("Boxs-OurExportTeam")
console.log(BoxsOurExportTeam)

fetch("https://northwind.vercel.app/api/customers").then(res=>res.json()).then((data)=>{
data.forEach((element)=>{
    console.log(element)

    const BoxOurExportTeam=document.createElement("div")
    BoxOurExportTeam.className=("Box-OurExportTeam")
    const Personimg=document.createElement("div")
    Personimg.className=("Person-img")
    const img=document.createElement("img")
    img.className=("img")
    const nameSorname=document.createElement("h2")
    const ixtisas=document.createElement("h3")
    const PersonText=document.createElement("p")
    const MoreBtn=document.createElement("button")

    img.setAttribute("src", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")

    BoxOurExportTeam.appendChild(Personimg)
    Personimg.appendChild(img)
    BoxOurExportTeam.appendChild(nameSorname)
    BoxOurExportTeam.appendChild(ixtisas)
    BoxOurExportTeam.appendChild(PersonText)
    BoxOurExportTeam.appendChild(MoreBtn)

    BoxsOurExportTeam.appendChild(BoxOurExportTeam)
})
})