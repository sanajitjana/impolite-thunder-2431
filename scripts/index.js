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

let productData = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-2_823x.jpg?v=1650308562",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-4_360x.jpg?v=1650308562",
    head: "Textile Drop Earrings | Houndstooth",
    price: 25,
    category: "New",
    date: 2018,
    tag: "Bestselling",
    availability: true,
    id: 9,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030800012-2__19471_493x.jpg?v=1645116158",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030800012-3__94518_493x.jpg?v=1645116160",
    head: "Minimal Circle Rhinestone Anklet",
    price: 19,
    category: "bracelets",
    date: 2018,
    tag: "bestselling",
    availability: true,
    id: 10,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030100160-3__70321_493x.jpg?v=1645115635",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030100160-3__31041_493x.jpg?v=1645115637",
    head: "Thin and Thin Chain Bracelet(18K)",
    price: 24,
    category: "bracelets",
    date: 2021,
    tag: "Featured",
    availability: false,
    id: 11,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011300002-2__23761_493x.jpg?v=1645110224",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011300001-3__08167_360x.jpg?v=1645110216",
    head: "Maryland Crab Earrings (18K & 24K)",
    price: 18,
    category: "earrings",
    date: 2018,
    tag: "bestselling",
    availability: false,
    id: 12,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010200826-C-1__83187_493x.jpg?v=1652369565",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010200826-C-3__07211_360x.jpg?v=1652369565",
    head: "Rhinestone Wing Earrings",
    price: 14,
    category: "earrings",
    date: 2018,
    tag: "bestselling",
    availability: false,
    id: 13,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100535-2__75509_493x.jpg?v=1645114230",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100535-4__11921_360x.jpg?v=1645114232",
    head: "Boss Status Bar Earrings (14K)",
    price: 16,
    category: "earrings",
    date: 2022,
    tag: "Featured",
    availability: false,
    id: 14,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401019-7-2_823x.jpg?v=1645728794",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401019-7-3_823x.jpg?v=1645728794",
    head: "Braided Ring",
    price: 14,
    category: "Rings",
    date: 2022,
    tag: "Bestselling",
    availability: true,
    id: 15,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401010-7-2__72676_823x.jpg?v=1645116401",
    hovimage:
      "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401010-7-3__37928_823x.jpg?v=1645116399",
    head: "Bridge Ring",
    price: 14,
    category: "Rings",
    date: 2022,
    tag: "Bestselling",
    availability: true,
    id: 16,
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
