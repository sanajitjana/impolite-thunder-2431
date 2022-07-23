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

// append total cart price Display
let displayTotalPrice = () => {
  let cart_items = JSON.parse(localStorage.getItem("cart_items")) || null;
  if (!cart_items) return;
  let sum = 0;
  cart_items.forEach((element) => {
    sum += element.count * element.price;
  });
  sum = sum.toFixed(2);
  document.getElementById("subtotal").innerText = `$${sum}`;
};
displayTotalPrice();

// cart product append function
let totalRowPrice = 0;
let totalCartPrice = 0;

let appendFunction = (data) => {
  if (!data) return;
  let products_list = document.getElementById("products-list");
  products_list.innerHTML = "";

  data.forEach((element, index, array) => {
    let row = document.createElement("div");
    row.setAttribute("id", "row");

    let img_secc = document.createElement("div");
    img_secc.setAttribute("id", "img-secc");

    let img = document.createElement("img");
    img.src = element.img;

    let prod_description = document.createElement("div");
    prod_description.setAttribute("id", "prod_description");

    let p1 = document.createElement("p");
    p1.innerText = element.head;
    p1.setAttribute("id", "prod-title");

    let p2 = document.createElement("p");
    let price = Number(element.price);
    price = price.toFixed(2);
    p2.innerText = `$${price}`;
    p2.setAttribute("id", "prod-price");

    prod_description.append(p1, p2);
    img_secc.append(img, prod_description);

    let btn_action = document.createElement("div");
    btn_action.setAttribute("id", "btn-action");

    let counter = document.createElement("div");
    counter.setAttribute("id", "counter");

    let btn1 = document.createElement("button");
    btn1.setAttribute("id", "dec");
    btn1.innerText = "-";

    let btn2 = document.createElement("button");
    btn2.setAttribute("id", "count-num");
    btn2.innerText = element.count;

    let btn3 = document.createElement("button");
    btn3.setAttribute("id", "inc");
    btn3.innerText = "+";

    let trash = document.createElement("i");
    trash.setAttribute("class", "fa fa-trash-o");
    trash.setAttribute("aria-hidden", "true");

    // remove from cart function
    trash.addEventListener("click", () => {
      array.splice(index, 1);
      localStorage.setItem("cart_items", JSON.stringify(array));
      appendFunction(array);
      displayTotalPrice();
    });

    counter.append(btn1, btn2, btn3);
    btn_action.append(counter, trash);

    let row_price_display = document.createElement("div");
    row_price_display.setAttribute("id", "row-price-display");

    // total row price
    let p3 = document.createElement("p");
    let total = (element.price * element.count).toFixed(2);
    totalRowPrice += +total;
    p3.innerText = `$${total}`;

    // increment the counter by one
    btn3.addEventListener("click", (e) => {
      qty++;
      total = +total;
      total += element.price;
      total = Number(total).toFixed(2);

      btn2.innerText = qty;
      p3.innerText = `$${total}`;

      //store updated data to LS
      element.count = qty;
      localStorage.setItem("cart_items", JSON.stringify(array));
      displayTotalPrice();
    });

    // decrement the counter by one
    let qty = element.count;
    btn1.addEventListener("click", (e) => {
      if (qty > 1) {
        qty--;
        total = +total;
        total -= element.price;
        total = Number(total).toFixed(2);
        p3.innerText = `$${total}`;

        // store updated data to LS
        element.count = qty;
        localStorage.setItem("cart_items", JSON.stringify(array));
        displayTotalPrice();
      }
      btn2.innerText = qty;
    });

    row_price_display.append(p3);

    row.append(img_secc, btn_action, row_price_display);
    products_list.append(row);
  });
};
// appendFunction(cart_items);

// redirect to checkout page
document.getElementById("checkout").addEventListener("click", () => {
  window.location.href = "checkout.html";
});
