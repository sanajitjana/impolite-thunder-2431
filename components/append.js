// display product List
let displayProductList = (allData, filterProp) => {
  if (!allData) return;

  let data = allData.filter((ele) => {
    if (ele.category == filterProp) return ele;
  });

  let products = document.getElementById("product-list");
  products.innerHTML = "";

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

export default displayProductList;
