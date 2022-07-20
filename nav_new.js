class Product {
  constructor(image, head, price) {
    this.image = image;
    this.head = head;
    this.price = price;
  }
}

let productData = [
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011100072-2_823x.jpg?v=1656343845",
    "Crystal Clear Hook Earrings (14K)",
    "14.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101016-2_823x.jpg?v=1650308683",
    "Refined Stud Earrings",
    "21.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-2_823x.jpg?v=1650308606",
    "Terrace Drop Earrings",
    "25.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-2_823x.jpg?v=1650308562",
    "Terrace Drop Earrings",
    "25.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-C-1_823x.jpg?v=1650308512",
    "Textile Drop Earrings | Checkered",
    "25.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-B-2_823x.jpg?v=1650308459",
    "Textile Drop Earrings | Florals",
    "25.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-A-1_823x.jpg?v=1650308396",
    "Textile Drop Earrings | Specks",
    "25.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101045-2_823x.jpg?v=1650308327",
    "Jelly Hoop Earrings",
    "25.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101043-2_823x.jpg?v=1650308200",
    "Regal Drop Earrings",
    "82.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101042-2_823x.jpg?v=1650308121",
    "Heartbreaker Dangle Earrings",
    "72.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101032-D-1_823x.jpg?v=1650307839",
    "Glacier Hoop Earrings | Pine",
    "52.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101032-C-1_823x.jpg?v=1650307778",
    "Glacier Hoop Earrings | Wine",
    "52.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101032-B-2_823x.jpg?v=1650307727",
    "Glacier Hoop Earrings | Ocean",
    "52.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101032-A-2_823x.jpg?v=1650307648",
    "Glacier Hoop Earrings | Clear",
    "52.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101020-2_823x.jpg?v=1650307565",
    "Adela Drop Earrings",
    "52.00"
  ),
  new Product(
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101031-2_823x.jpg?v=1650306792",
    "Adela Drop Earrings",
    "30.00"
  ),
];

appendData(productData);

function appendData(data) {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "card");
    div.addEventListener("click", () => {
      goingToCart(el);
    });

    let images = document.createElement("img");
    images.src = el.image;

    let heading = document.createElement("h3");
    heading.setAttribute("class", "heading");
    heading.innerText = el.head;

    let prices = document.createElement("p");
    prices.setAttribute("id", "price");
    prices.innerText = "$" + el.price;

    div.append(images, heading, prices);
    document.getElementById("products").append(div);
  });
}
let getdata;
getdata = JSON.parse(localStorage.getItem("CartItems")) || [];
let goingToCart = (cartData) => {
  console.log(cartData);
  getdata.push(cartData);
  localStorage.setItem("CartItems", JSON.stringify(getdata));
};
