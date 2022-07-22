import { navbar, footer } from "./navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();

// home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

//cart item count
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let displayCartCount = (data) => {
  let total_cart_item = document.getElementById("total-cart-item");
  total_cart_item.innerText = data.length;
};
displayCartCount(cart_items);

//--------------------------login js starts-------------------------------------------//

document.querySelector("form").addEventListener("submit", myloginfun);
let data = JSON.parse(localStorage.getItem("Userdetails")) || [];

function myloginfun(event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let res = false;
  data.map((elem) => {
    if (elem.email == email && elem.password == password) {
      res = true;

      localStorage.setItem("UserDetails", JSON.stringify(data));
    }
  });
  if (res == true) {
    alert("You are successfully logged in");
    location.href = "Home.html";
  } else {
    alert("Credenials are wrong!!!!!");
    location.href = "login.html";
  }
}
