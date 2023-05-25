const barIcon = document.querySelector(".barIcon");
const Xicon = document.querySelector(".Xicon");
const clickBarIcon = document.querySelector(".clickBarIcon");

barIcon.addEventListener("click", () => {
  console.log("salam");
  clickBarIcon.classList.toggle("barIconNav");
});

Xicon.addEventListener("click", () => {
  clickBarIcon.classList.remove("barIconNav");
});

const recentCards = document.querySelector(".recentCards");

fetch("./assets/json/index.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);

      const recentCard = document.createElement("div");
      const foto = document.createElement("img");
      const tarix = document.createElement("span");
      const paraqraf = document.createElement("p");

      recentCard.appendChild(foto);
      recentCard.appendChild(tarix);
      recentCard.appendChild(paraqraf);
      recentCards.appendChild(recentCard);


      recentCard.className = "recentCard";
      foto.tagName = "img";
      paraqraf.tagName = "p";
      tarix.tagName = "span";

      foto.src = element.img;
      tarix.innerText=element.date
      paraqraf.innerText=element.ressons
    });
  });
