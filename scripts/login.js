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

// signup page redirect
let create_account = document.getElementById("create-account");
create_account.addEventListener("click", () => {
  window.location.href = "signup.html";
});

//cart item count
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let displayCartCount = (data) => {
  let total_cart_item = document.getElementById("total-cart-item");
  total_cart_item.innerText = data.length;
};
displayCartCount(cart_items);

// login function
let loginFunction = (data, event) => {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let res = false;
  data.map((elem) => {
    if (elem.email == email && elem.password == password) {
      res = true;
      localStorage.setItem("loginUser", JSON.stringify(signupData));
    }
  });
  if (res == true) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Wrong credentials!");
  }
};

// function invoke
let signupData = JSON.parse(localStorage.getItem("Userdetails")) || [];
document.querySelector("form").addEventListener("submit", (e) => {
  loginFunction(signupData, e);
});
