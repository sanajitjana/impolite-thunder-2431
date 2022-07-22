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

  let prod_main_img = document.getElementById("product_main_img");
  prod_main_img.src = data.img1;

  let prod_title = document.getElementById("product-title");
  prod_title.innerText = data.head;

  let prod_price = document.getElementById("price");
  prod_price.innerText = `$${data.price}`;
};

// append function invoke
let product_details =
  JSON.parse(localStorage.getItem("product_details")) || null;
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

  // checking if product is alreday available
  // then we can just increse the quantity
  // either add to blank cart

  let element = findProductId(product_details.id);
  if (element) {
    element["count"] = +document.getElementById("count-num").innerText;
    cart_item.push(element);
    localStorage.setItem("cart_item", JSON.stringify(cart_item));
    window.location.href = "cart.html";
  } else {
    product_details["count"] = +document.getElementById("count-num").innerText;
    cart_item.push(product_details);
    localStorage.setItem("cart_item", JSON.stringify(product_details));
    window.location.href = "cart.html";
  }
};

// append add to cart function
let add_to_cart_btn = document.getElementById("add-to-cart");
add_to_cart_btn.addEventListener("click", addToCart);