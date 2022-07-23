import object from "./Object.js";

let data = object();
appendData(data);

function appendData(data) {
  data.forEach((el) => {
    if (el.category === "New") {
      // console.log(el.hovimage);
      let div = document.createElement("div");
      div.setAttribute("id", "card");
      div.addEventListener("click", () => {
        goingToCart(el);
      });

      div.addEventListener("mouseover", () => {
        images.src = el.hovimage;
        heading.style.textDecoration = "underline 1.6px";
      });
      div.addEventListener("mouseout", () => {
        images.src = el.image;
        heading.style.textDecoration = "none";
      });

      let images = document.createElement("img");
      images.src = el.image;
      images.style.transition = "transform 1s ease";

      let heading = document.createElement("h3");
      heading.setAttribute("class", "heading");
      heading.innerText = el.head;

      let prices = document.createElement("p");
      prices.setAttribute("id", "price");
      prices.innerText = "$" + el.price;

      div.append(images, heading, prices);
      document.getElementById("products").append(div);
    }
  });
}

let goingToCart = (cartData) => {
  localStorage.setItem("CartItems", JSON.stringify(cartData));
  window.location.href = "";
};

document.querySelector("#price-filter").addEventListener("click", showPoPup);
function showPoPup() {
  var popup = document.querySelector("#price-range");
  popup.style.display = "block";
}

document
  .querySelector("#price-range")
  .addEventListener("mouseleave", hidePoPup);
function hidePoPup() {
  var popup = document.querySelector("#price-range");
  popup.style.display = "none";
}

//Availibility
document.querySelector("#availibility").addEventListener("click", showavail);
function showavail() {
  var popup = document.querySelector("#stock-select");
  popup.style.display = "block";
}

document
  .querySelector("#stock-select")
  .addEventListener("mouseleave", hideavail);
function hideavail() {
  var popup = document.querySelector("#stock-select");
  popup.style.display = "none";
}
