import { navbar, footer } from "./navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

navbarContainer.innerHTML = navbar();
// footerContainer.innerHTML = footer();

let productData = [
  {
    id: "h1",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011100072-1_823x.jpg?v=1656343846",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011100072-2_533x.jpg?v=1656343845",
    proName: "Crystal Clear Hook Earrings(14k) ",
    price: "$14.00",
  },
  {
    id: "h2",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101016-1_823x.jpg?v=1650308676",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101016-4_533x.jpg?v=1650308683",
    proName: "Refined Stud Earrings",
    price: "$21.00",
  },
  {
    id: "h3",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-1_823x.jpg?v=1650308599",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-4_533x.jpg?v=1650308606",
    proName: "Terrace Drop Earrings ",
    price: "$25.00",
  },
  {
    id: "h4",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-1_823x.jpg?v=1650308558",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-4_533x.jpg?v=1650308562",
    proName: "Textile Drop Earrings | Houndstooth",
    price: "$25.00",
  },
  {
    id: "h5",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-C-2_823x.jpg?v=1650308512",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-C-4_533x.jpg?v=1650308512",
    proName: "Textile Drop Earrings | Checkered",
    price: "$25.00",
  },
  {
    id: "h6",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-B-1_1100x.jpg?v=1650308456",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-B-4_533x.jpg?v=1650308459",
    proName: "Textile Drop Earrings | Florals",
    price: "$25.00",
  },
  {
    id: "h7",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-A-2_823x.jpg?v=1650308396",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-A-4_533x.jpg?v=1650308396",
    proName: "Textile Drop Earrings | Specks",
    price: "$25.00",
  },
  {
    id: "h8",
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101045-1_823x.jpg?v=1650308318",
    hovImg:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101045-4_533x.jpg?v=1650308327",
    proName: "Jelly Hoop Earrings",
    price: "$25.00",
  },
];

let gridData = [
  {
    img: "https://storage.covet.pics/postassets/12327673/high_resolution/1b248440676a46ccaef5418696b6cafb",
  },
  {
    img: "https://storage.covet.pics/postassets/12007666/high_resolution/e914c46768434be928cbaeb7cda40f9a",
  },
  {
    img: "https://storage.covet.pics/postassets/11999924/high_resolution/2396933b0a70143ee84c2b0352ccc5f2",
  },
  {
    img: "https://storage.covet.pics/postassets/11980922/high_resolution/f8541afa692ffd452c7f1120072e233d",
  },
  {
    img: "https://storage.covet.pics/postassets/11953653/standard_resolution/e29739a295db25d0db7be892e71159d6",
  },
  {
    img: "https://storage.covet.pics/postassets/11944342/standard_resolution/91375b24accb75832681adc926fce15d",
  },
  {
    img: "https://storage.covet.pics/postassets/11937553/standard_resolution/de0213024a8ec64bb32839f62f8e6b39",
  },
  {
    img: "https://storage.covet.pics/postassets/11933882/standard_resolution/50305d19b46bd3903e4bbde66c50cf0e",
  },
  {
    img: "https://storage.covet.pics/postassets/11925590/standard_resolution/1666fafbb7475425048ff5e392873643",
  },
];

// display the product list
let displayData = (data) => {
  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let love_btn = document.createElement("button");
    love_btn.setAttribute("class", "heart-back");
    love_btn.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;

    love_btn.addEventListener("click", (e) => {
      love_btn.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;
    });

    let img_box = document.createElement("div");
    img_box.setAttribute("class", "img-box");

    let img = document.createElement("img");
    img.src = el.img;
    img.loading = "lazy";
    img_box.append(img);

    let title = document.createElement("a");
    title.innerText = el.proName;
    title.setAttribute("class", "prod-title");

    card.addEventListener("mouseover", (e) => {
      img.src = el.hovImg;
      title.style.borderBottom = "1px solid #121212";
    });
    card.addEventListener("mouseout", (e) => {
      img.src = el.img;
      title.style.borderBottom = "1px solid transparent";
    });

    let price = document.createElement("p");
    price.innerText = el.price;
    price.setAttribute("class", "prod-price");

    card.append(love_btn, img_box, title, price);
    document.querySelector("#product-list").append(card);
  });
};
displayData(productData);

// grid struct function
let moreGridStructFuntion = (data) => {
  let grid_img_list = document.getElementById("grid-img-list");

  let shop_feed_list = document.createElement("div");
  shop_feed_list.setAttribute("id", "shop-feed-list");

  data.forEach((item) => {
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      window.location.href = "shop-all.html";
    });

    let img = document.createElement("img");
    img.src = item.img;
    img.setAttribute("class", "grid-img");

    div.append(img);
    shop_feed_list.append(div);
  });
  grid_img_list.append(shop_feed_list);
};

moreGridStructFuntion(gridData);

// more grid list function when we click on btn
let more_btn = document.getElementById("more");
more_btn.addEventListener("click", (e) => {
  moreGridStructFuntion(gridData);
});
