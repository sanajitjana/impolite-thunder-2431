import object from "./Object.js";
import appenfunc fomr ""

let data = object();
let product_table=document
appenfunc(data, product_table)

// appendData(productData);
function newLovoda() {
  productData.forEach(function (el) {
    //console.log(el.categeory);
    if (el.categeory == "New") {
      appendData(el);
    }
  });
}

function ringsLovoda() {
  productData.forEach(function (el) {
    //console.log(el.categeory);
    if (el.categeory == "Rings") {
      appendData(el);
    }
  });
}

function appendData(data) {
  document.getElementById("products").innerHTML = "";
  let div = document.createElement("div");
  div.setAttribute("id", "card");
  div.addEventListener("click", () => {
    goingToCart(el);
  });

  let images = document.createElement("img");
  images.src = data.image;

  let heading = document.createElement("h3");
  heading.setAttribute("class", "heading");
  heading.innerText = data.head;

  let prices = document.createElement("p");
  prices.setAttribute("id", "price");
  prices.innerText = "$" + data.price;

  div.append(images, heading, prices);
  document.getElementById("products").append(div);
}

let goingToCart = (cartData) => {
  localStorage.setItem("CartItems", JSON.stringify(cartData));
  window.location.href = "";
};
