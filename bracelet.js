import {object3} from "../object1.js"
let braceletData = object3()
console.log(braceletData)


// localStorage.setItem("necklaceData",JSON.stringify(necklaces)); 

// var braceletdata = JSON.parse(localStorage.getItem("necklaceData")) || [];

// console.log(braceletdata)

display(braceletData) ;

function display(data) {
    // console.log(data)
data.map(function (el) {
var card = document.createElement("div");
var hovimage;
card.setAttribute("id", "card");
// card.addEventListener('mouseover', (el) => {
//     console.log("mouseover")
//      hovimage = document.createElement("img");
//     hovimage.src = el.hovimage;
// });
var image = document.createElement("img");
image.src = el.image;



var head = document.createElement("h5");
head.textContent = el.head;

var price = document.createElement("p")
price.textContent = `$ ${el.price}`;
price.setAttribute("class", "para")

var fav = document.createElement("img")
fav.src = "https://encrypted-tbn0.gstatic.com/hovimages?q=tbn:ANd9GcQobfSOCPduYpVTa2kAHaLWapi651J_Sp6yTQ&usqp=CAU"
fav.setAttribute("class", "symbol1")


var div2 = document.createElement("div")
div2.setAttribute("class", "box2")


div2.append(head,price)

card.append(image,div2);

card.addEventListener("click", zoomin)
function zoomin() {
    localStorage.setItem("zoomin", JSON.stringify(el))
    window.location.href = ""
}

document.querySelector("#braceletdiv").append(card)
fav.addEventListener("click", function () {
    alert("Product is added to wishlist")
    
})
})
}