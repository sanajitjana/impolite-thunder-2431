import object from "./Object.js";

let data = object();
appendData(data);

function appendData(data) {
  data.forEach((el) => {
    if (el.category === "New") {
      let div = document.createElement("div");
      div.setAttribute("id", "card");
      div.addEventListener("click", () => {
        goingToCart(el);
      });

      let images = document.createElement("img");
      images.src = el.image;

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
