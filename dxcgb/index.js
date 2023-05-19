const form = document.getElementById("form");
const inp = document.querySelector(".inp");
const sub = document.querySelector(".sub");

// form.addEventListener("submit", writeConsole);
// sub.addEventListener("click", getFormApi);

// function writeConsole(e) {
//   console.log(inp.value);
//   inp.value = "";
//   e.preventDefault();
// }

fetch("https://northwind.vercel.app/api/customers")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      create(element);
    });
  });

function create(el) {
  const div = document.createElement("div");
  const h2 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  div.className = "list";
  h2.innerText = el.id;
  p1.innerText = el.companyName;
  p2.innerText=el.contactName
  document.body.appendChild(div);
  div.appendChild(h2);
  div.appendChild(p1)
  div.appendChild(p2)

}

inp.addEventListener("keyup", () => {
  const list = document.querySelectorAll(".list");
  const text = inp.value.toLowerCase();

  list.forEach((item) => {
    if (item.innerText.toLowerCase().includes(text)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
