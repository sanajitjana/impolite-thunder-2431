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

// display login user name
let displayLoginUserDetails = (data) => {
  if (!data) return;
  let name = document.getElementById("name-display");
  name.innerText = `Hi, ${data.first_name} ${data.last_name}`;
};
let loginUserLS = JSON.parse(localStorage.getItem("loginUser")) || null;
displayLoginUserDetails(loginUserLS);

// display orders of login user
let displayOrders = (order, loginUser) => {
  if (!order) return;

  let below_table = document.getElementById("below-table");
  below_table.innerHTML = "";
  below_table.setAttribute("id", "below-table");

  order.filter((ele) => {
    if (loginUser.email == ele.email) return ele;
  });

  orderArray.forEach((element) => {
    let orderNumber = document.createElement("p");
    orderNumber.innerHTML = `Order ID: <strong>#${element.order_id}</strong>`;
    orderNumber.setAttribute("id", "order-number");

    let products_list = document.createElement("div");
    products_list.setAttribute("id", "products-list");

    let items = element.orderItems;
    let totalOrderAmount = 0;

    items.forEach((item) => {
      let row = document.createElement("div");
      row.setAttribute("id", "row");

      // img-secc
      let img_box = document.createElement("div");
      img_box.setAttribute("id", "img-secc");

      let img = document.createElement("img");
      img.src = item.img;

      let prod_description = document.createElement("div");
      prod_description.setAttribute("id", "prod_description");

      let title = document.createElement("p");
      title.innerText = item.head;
      title.setAttribute("id", "prod-title");

      let price = document.createElement("p");
      price.innerText = `$${item.price.toFixed(2)}`;
      price.setAttribute("id", "prod-price");

      prod_description.append(title, price);
      img_box.append(img, prod_description);

      // btn-action
      let btn_action = document.createElement("div");
      btn_action.setAttribute("id", "btn-action");

      let qty = document.createElement("p");
      qty.innerText = `${item.count} piece`;
      qty.setAttribute("id", "count-num");

      btn_action.append(qty);

      // row-price-display
      let row_price_display = document.createElement("div");
      row_price_display.setAttribute("id", "row-price-display");

      let totalRowPrice = item.count * item.price;
      totalOrderAmount += totalRowPrice;
      let totalPrice = `$${totalRowPrice.toFixed(2)}`;
      row_price_display.append(totalPrice);

      row.append(img_box, btn_action, row_price_display);
      products_list.append(row);
    });
    let hr_bar = document.createElement("hr");
    hr_bar.setAttribute("class", "hr-bar");

    let sub_total_price = document.createElement("div");
    sub_total_price.setAttribute("id", "sub-total-price");

    let totalText = document.createElement("p");
    totalText.innerText = "Total";

    let subTotalPrice = document.createElement("p");
    subTotalPrice.innerText = `$${totalOrderAmount.toFixed(2)}`;

    sub_total_price.append(totalText, subTotalPrice);
    below_table.append(orderNumber, products_list, hr_bar, sub_total_price);
  });
};

let ordersLS = JSON.parse(localStorage.getItem("orders")) || null;
displayOrders(ordersLS, loginUserLS);
