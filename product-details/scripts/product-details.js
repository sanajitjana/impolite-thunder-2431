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

dec.addEventListener("click", decreaseFunc);
inc.addEventListener("click", increaseFunc);
// end quantity counter function

// product details append
let appendProductDetails = (data) => {
  if (!data) return;

  let prod_main_img = document.getElementById("product_main_img");
  prod_main_img.src = data.img1;

  let prod_title = document.getElementById("product-title");
  prod_title.innerText = data.head;

  let prod_price = document.getElementById("price");
  prod_price.innerText = `$${data.price}`;
};

// function invoke
let product_details =
  JSON.parse(localStorage.getItem("product_details")) || null;
appendProductDetails(product_details);
