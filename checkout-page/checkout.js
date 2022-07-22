let subTotal = 0;

// product display function
let displayProductList = (data) => {
  if (!data) return;

  let productList = document.getElementById("product-list");
  productList.innerHTML = "";

  data.forEach((element) => {
    let row = document.createElement("div");
    row.setAttribute("id", "row");

    let img_box = document.createElement("div");
    img_box.setAttribute("id", "img-box");

    let p1 = document.createElement("p");
    p1.innerText = element.count;

    let img = document.createElement("img");
    img.src = element.img;

    img_box.append(p1, img);

    let title = document.createElement("h3");
    title.innerText = element.head;
    title.setAttribute("id", "che_title");

    let price = document.createElement("h3");
    let totalPrice = element.count * element.price;
    subTotal += totalPrice;
    totalPrice = totalPrice.toFixed(2);
    price.innerText = `$${totalPrice}`;
    price.setAttribute("id", "che_price");

    row.append(img_box, title, price);
    productList.append(row);
  });
};

let cart_items = JSON.parse(localStorage.getItem("cart_items")) || null;
displayProductList(cart_items);

let displaySubTotal = (data) => {
  let sub_top = document.getElementById("sub-total-top");
  let sub_bottom = document.getElementById("sub-total-bottom");

  data = data.toFixed(2);
  sub_top.innerText = `$${data}`;

  sub_bottom.innerHTML = `<span>USD</span> $${data}`;
};
displaySubTotal(subTotal);
