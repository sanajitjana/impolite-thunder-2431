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

  let orderArray = order.filter((element) => {
    if (element.email == loginUser.email) return element;
  });

  let below_table = document.getElementById("below-table");
  below_table.innerHTML = "";
  below_table.setAttribute("id", "below-table");

  orderArray.forEach((element) => {
    let orderNumber = document.createElement("p");
    orderNumber.innerText = "randomNum";
    orderNumber.setAttribute("id", "order-number");

    let products_list = document.createElement("div");
    products_list.setAttribute("id", "products-list");

    let items = element.orderItems;
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

      let totalPrice = "Total Row Price";
      row_price_display.append(totalPrice);

      row.append(img_box, btn_action, row_price_display);
      products_list.append(row);
      console.log(item);
    });
    let hr_bar = document.createElement("hr");
    hr_bar.setAttribute("class", "hr-bar");

    below_table.append(orderNumber, products_list, hr_bar);
  });

  // console.log(orderArray);
  // console.log(order);
  // console.log(loginUser.email);
};

let ordersLS = JSON.parse(localStorage.getItem("orders")) || null;
displayOrders(ordersLS, loginUserLS);
