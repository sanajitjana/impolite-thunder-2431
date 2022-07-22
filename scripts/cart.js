import { navbar, footer } from "./navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

navbarContainer.innerHTML = navbar();
// footerContainer.innerHTML = footer();

let data = [
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/040500130-2__40145_300x.jpg?v=1645114548",
    head: "A Toast To You RIng | Rose Gold (14K)",
    price: 20.0,
    count: 1,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101016-1_300x.jpg?v=1650308676",
    head: "Refined Stud Earrings",
    price: 51.0,
    count: 2,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010200756-2__84729_300x.jpg?v=1645115971",
    head: "A Dozen Diamonds Dangle Earrings (14K)",
    price: 18.0,
    count: 5,
  },
];
localStorage.setItem("cart_items", JSON.stringify(data));

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
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || null;
appendFunction(cart_items);

// redirect to checkout page
document.getElementById("checkout").addEventListener("click", () => {
  window.location.href = "checkout.html";
});

// home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

//cart item count
let displayCartCount = (data) => {
  let total_cart_item = document.getElementById("total-cart-item");
  total_cart_item.innerText = data.length;
};
displayCartCount(cart_items);