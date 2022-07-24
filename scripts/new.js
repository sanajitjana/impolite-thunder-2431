import shopAllProducts from "../components/shop-all-objects.js";
import popup from "../components/pop-up.js";
import { navbar, footer } from "../components/navbar.js";

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

// display product List
let displayProductList = (allData) => {
  if (!allData) return;

  let newData = allData.filter((ele) => {
    if (ele.tag == "New") return ele;
  });

  let products = document.getElementById("product-list");
  products.innerHTML = "";

  newData.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    card.addEventListener("click", () => {
      localStorage.setItem("productDetails", JSON.stringify(el));
      window.location.href = "product-details.html";
    });

    let love_btn = document.createElement("button");
    love_btn.setAttribute("class", "heart-back");
    love_btn.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;

    love_btn.addEventListener("click", (e) => {
      love_btn.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;
    });

    let img_box = document.createElement("div");
    img_box.setAttribute("class", "img-box");

    let img = document.createElement("img");
    img.src = el.image;
    img.loading = "lazy";
    img_box.append(img);

    let title = document.createElement("a");
    title.innerText = el.head;
    title.setAttribute("class", "prod-title");

    // hover effect
    card.addEventListener("mouseover", (e) => {
      img.src = el.hovimage;
      title.style.borderBottom = "1px solid #121212";
    });
    card.addEventListener("mouseout", (e) => {
      img.src = el.image;
      title.style.borderBottom = "1px solid transparent";
    });

    let price = document.createElement("p");
    price.innerText = `$${el.price.toFixed(2)}`;
    price.setAttribute("class", "prod-price");

    card.append(love_btn, img_box, title, price);
    products.append(card);
  });
};

// function invoke
let data = shopAllProducts();
displayProductList(data);

// Best Selling Filter
let sorting = () => {
  let x = document.querySelector("#selector").value;
  if (x === "Bestselling") {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      if (x === data[i].tag) {
        res.push(data[i]);
      }
    }
    displayProductList(res);

    // Featured Filter
  } else if (x === "Featured") {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      if (x === data[i].tag) {
        res.push(data[i]);
      }
    }
    displayProductList(res);

    // A to Z Filter
  } else if (x === "A-Z") {
    data.sort(function (a, b) {
      if (a.head > b.head) {
        return 1;
      }
      if (b.head > a.head) {
        return -1;
      }
      return 0;
    });
    displayProductList(data);

    // Z to A Filter
  } else if (x === "Z-A") {
    data.sort(function (a, b) {
      if (a.head < b.head) {
        return 1;
      }
      if (b.head < a.head) {
        return -1;
      }
      return 0;
    });
    displayProductList(data);

    // Price Low to High Filter
  } else if (x === "low-to-high") {
    data.sort(function (a, b) {
      return a.price - b.price;
    });
    displayProductList(data);

    // Price High to Low Filter
  } else if (x === "high-to-low") {
    data.sort(function (a, b) {
      return b.price - a.price;
    });
    displayProductList(data);

    // Old to New Product
  } else if (x === "old-new") {
    data.sort(function (a, b) {
      return a.date - b.date;
    });
    displayProductList(data);

    // New to Old Product
  } else if (x === "new-old") {
    data.sort(function (a, b) {
      return b.date - a.date;
    });
    displayProductList(data);
  }
};

// filter function invoke
document.querySelector("#selector").addEventListener("change", sorting);

// display total products count
let productsCountDisplay = (data) => {
  let left_s = document.getElementById("left-s");
  left_s.innerHTML = "";
  let p = document.createElement("p");
  let count = 0;
  data.filter((ele) => {
    if (ele.tag == "New") count++;
  });
  p.innerText = `${count} products`;
  left_s.append(p);
};
productsCountDisplay(shopAllProducts());
