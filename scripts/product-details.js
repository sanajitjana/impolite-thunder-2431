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

let displayCartCount = () => {
  let total_cart_item = document.getElementById("total-cart-item");
  let wishlist_cart_item = document.getElementById("wishlist");
  let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
  let sumCount = 0;
  if (loginUser == null) {
    total_cart_item.innerText = sumCount;
    wishlist_cart_item.innerText = `View my Cart (${sumCount})`;
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
      wishlist_cart_item.innerText = `View my Cart (${sumCount})`;
    } else {
      total_cart_item.innerText = sumCount;
      wishlist_cart_item.innerText = `View my Cart (${sumCount})`;
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

// quantity counter function
let dec = document.getElementById("dec");
let inc = document.getElementById("inc");

let i = 1;
document.getElementById("count-num").innerText = i;

let decreaseFunc = () => {
  let count = document.getElementById("count-num").innerText;
  let i = count;
  if (count > 1 && count !== "1") {
    i--;
    document.getElementById("count-num").innerText = i;
  }
};
let increaseFunc = () => {
  let count = document.getElementById("count-num").innerText;
  let i = count;
  if (count >= 1) {
    i++;
    document.getElementById("count-num").innerText = i;
  }
};

// inc/dec function invoke
dec.addEventListener("click", decreaseFunc);
inc.addEventListener("click", increaseFunc);

// product details append on html
let appendProductDetails = (data) => {
  if (!data) return;

  let prod_main_img = document.getElementById("main-img");
  prod_main_img.src = data.image;

  let prod_second_img = document.getElementById("second-img");
  prod_second_img.src = data.hovimage;

  let prod_third_img = document.getElementById("third-img");
  prod_third_img.src = data.image;

  let prod_title = document.getElementById("product-title");
  prod_title.innerText = data.head;

  let prod_price = document.getElementById("price");
  prod_price.innerText = `$${data.price.toFixed(2)}`;
};

// append function invoke
let product_details =
  JSON.parse(localStorage.getItem("productDetails")) || null;
appendProductDetails(product_details);

//find product available or not
let cart_item = JSON.parse(localStorage.getItem("cart_item")) || null;

let findProductId = (id) => {
  if (!cart_item) return;
  cart_item.filter = (element) => {
    if (element.id == id) return element;
  };
};

//add to cart function
let addToCart = () => {
  if (!product_details) return;
  if (loginUser == null) {
    alert("Login required");
  } else {
    //check user is exits retun his data - arr[obj]
    let userIndex = null;
    let res = cart_items.filter((item, index) => {
      if (item.email == loginUser.email) {
        userIndex = index;
        return item;
      }
    });

    // if user cart is exists check his array
    if (res.length !== 0) {
      let cartArray = res[0].cartItems;

      // checking this product is present or not
      let element = cartArray.filter((ele, index) => {
        if (ele.id == product_details.id) {
          return ele;
        }
      });

      // if id match catch the cart-item for increasing count
      if (element.length !== 0) {
        element[0].count += +document.getElementById("count-num").innerText;

        // cart_items.splice(userIndex, 1);
        let obj = {
          email: loginUser.email,
          cartItems: cartArray,
        };
        cart_items[userIndex] = obj;
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
        displayCartCount();

        alert("product added to the cart");
      } else {
        // else puting the item with count = button counter
        product_details.count = +document.getElementById("count-num").innerText;
        cartArray.push(product_details);

        let obj = {
          email: loginUser.email,
          cartItems: cartArray,
        };

        let newArray = [];
        newArray.push(obj);

        localStorage.setItem("cart_items", JSON.stringify(newArray));
        displayCartCount();
        alert("product added to the cart");
      }

      // if user new/first time in cart/aftre a order wants to order more
    } else if (res.length == 0) {
      let count_input = +document.getElementById("count-num").innerText;
      product_details.count = count_input;
      let newArray = [];
      newArray.push(product_details);

      let obj = {
        email: loginUser.email,
        cartItems: newArray,
      };
      cart_items.push(obj);
      localStorage.setItem("cart_items", JSON.stringify(cart_items));
      displayCartCount();
      alert("product added to the cart");
    }
  }
};

// append add to cart function
let add_to_cart_btn = document.getElementById("add-to-cart");
add_to_cart_btn.addEventListener("click", (e) => {
  addToCart();
});

// redirect to cart
let redirect_to_cart = document.getElementById("wishlist");
redirect_to_cart.addEventListener("click", (e) => {
  window.location.href = "cart.html";
});

// redirect to checkout page
document.getElementById("buy-it-now").addEventListener("click", () => {
  let elements = cart_items.filter((ele, index) => {
    if (loginUser.email == ele.email) {
      return ele;
    }
  });
  let flag = false;
  for (let i = 0; i < elements.length; i++) {
    let x = elements[i].cartItems;
    if (x.length > 0) flag = true;
  }
  if (flag) window.location.href = "checkout.html";
  else alert("Please select a cart item");
});
