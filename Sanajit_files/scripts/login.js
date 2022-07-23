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

// signup page redirect
let create_account = document.getElementById("create-account");
create_account.addEventListener("click", () => {
  window.location.href = "signup.html";
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

// login function
let loginFunction = (data, event) => {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (email == "") {
    alert("Please enter a email");
  } else if (password == "") {
    alert("Please enter a password");
  } else {
    let res = data.filter((elem) => {
      if (elem.email == email && elem.password == password) {
        return elem;
      }
    });
    if (res) {
      alert("Login successful!");
      let loginVal = res[0];
      localStorage.setItem("loginUser", JSON.stringify(loginVal));
      window.location.href = "index.html";
    } else {
      alert("Wrong credentials!");
    }
  }
};

// function invoke
let signupData = JSON.parse(localStorage.getItem("signupData")) || [];
document.querySelector("form").addEventListener("submit", (e) => {
  loginFunction(signupData, e);
  console.log(signupData);
});
