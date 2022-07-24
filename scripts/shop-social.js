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

// grid struct function
let moreGridStructFuntion = (data) => {
  let grid_img_list = document.getElementById("grid-img-list-shop-social");

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
