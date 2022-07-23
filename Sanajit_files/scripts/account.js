import { navbar, footer } from "../components/navbar.js";
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
let sumCount = 0;
let displayCartCount = (data) => {
  if (!data) return;
  let total_cart_item = document.getElementById("total-cart-item");
  data.forEach((element) => {
    sumCount += element.count;
  });
  total_cart_item.innerText = sumCount;
};
displayCartCount(cart_items);

// redirect to account/login
let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
let login_icon = document.getElementById("login-icon");
login_icon.addEventListener("click", () => {
  if (loginUser) {
    window.location.href = "account.html";
  } else {
    window.location.href = "login.html";
  }
});

// logout function
let logoutFunction = () => {
  localStorage.removeItem("loginUser");
  window.location.href = "login.html";
};

let logout_btn = document.getElementById("logout");
logout_btn.addEventListener("click", (e) => {
  let res = confirm("Are you sure?");
  if (res) {
    logoutFunction();
  }
});
