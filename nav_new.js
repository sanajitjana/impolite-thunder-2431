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
    "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011100072-2_823x.jpg?v=1656343845",
    "Crystal Clear Hook Earrings (14K)",
    "14.00"
  ),
];

appendData(productData);

function appendData(data) {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "card");
    div.addEventListener("mouseover", () => {
      mouseOver();
    });
    div.addEventListener("mouseout", () => {
      mouseOut();
    });

    let images = document.createElement("img");
    images.src = el.image;

    let heading = document.createElement("h3");
    heading.setAttribute("class", "heading");
    heading.innerText = el.head;

    let prices = document.createElement("p");
    prices.innerText = "$" + el.price;

    div.append(images, heading, prices);
    document.getElementById("products").append(div);
  });
}

function mouseOver() {
  document.querySelector(".heading").style.color = "white";
}

function mouseOut() {
  document.querySelector(".heading").style.color = "black";
}
