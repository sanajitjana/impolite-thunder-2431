import shopAllProducts from "../components/shop-all-objects.js";
import popup from "../components/pop-up.js";
import { navbar, footer } from "../components/navbar.js";
import sorting from "../components/category-filter.js";
import appendData from "../components/append.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

// home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

//cart item count
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
let sumCount = 0;

let displayCartCount = () => {
  let total_cart_item = document.getElementById("total-cart-item");
  if (loginUser == null) {
    total_cart_item.innerText = sumCount;
  } else {
    if (cart_items.length > 0) {
      let elements = cart_items.filter((ele) => {
        if (loginUser.email == ele.email) return ele;
      });

      for (let i = 0; i < elements.length; i++) {
        let x = elements[i].cartItems;
        for (let j = 0; j < x.length; j++) {
          sumCount += x[j].count;
        }
      }
      total_cart_item.innerText = sumCount;
    } else {
      total_cart_item.innerText = sumCount;
    }
  }
};
displayCartCount();

// redirect to account/login
let login_icon = document.getElementById("login-icon");
login_icon.addEventListener("click", () => {
  if (loginUser) {
    window.location.href = "account.html";
  } else {
    window.location.href = "login.html";
  }
});

// display total products count
let productsCountDisplay = (data) => {
  let left_s = document.getElementById("left-s");
  left_s.innerHTML = "";
  let p = document.createElement("p");
  let count = 0;
  data.filter((ele) => {
    if (ele.category == "Rings") count++;
  });
  p.innerText = `${count} products`;
  left_s.append(p);
};
productsCountDisplay(shopAllProducts());

// function display Sorting
let key = document.querySelector("#selector");
key.addEventListener("change", (e) => {
  let x = sorting(shopAllProducts(), key.value);
  appendData(x, "Rings");
});

// Filtering Rings product loading time
appendData(shopAllProducts(), "Rings");
