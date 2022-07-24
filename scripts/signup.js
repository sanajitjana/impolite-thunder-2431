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
