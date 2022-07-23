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

// signup function
let signupData = JSON.parse(localStorage.getItem("signupData")) || [];

let signupFunction = (data, event) => {
  event.preventDefault();

  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (fname == "") {
    alert("Please enter your first name");
  } else if (lname == "") {
    alert("Please enter your last name");
  } else if (email == "") {
    alert("Please enter your email address");
  } else if (password == "") {
    alert("Please enter your password");
  } else {
    let res = false;
    if (data.length == 0) {
      res = true;
      let dataObj = {
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
      };
      data.push(dataObj);
    } else {
      data.forEach((element) => {
        if (element.email == email) {
          res = false;
        } else {
          res = true;
          let dataObj = {
            first_name: fname,
            last_name: lname,
            email: email,
            password: password,
          };
          data.push(dataObj);
        }
      });
    }
    if (res == true) {
      alert("Signup successful!");
      localStorage.setItem("signupData", JSON.stringify(data));
      window.location.href = "login.html";
    } else {
      alert("User already exists! Login");
      window.location.href = "login.html";
    }
  }
};

document.querySelector("form").addEventListener("submit", (e) => {
  signupFunction(signupData, e);
});
