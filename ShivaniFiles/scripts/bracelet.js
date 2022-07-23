import {object3} from "../object1.js"
let braceletData = object3()

document.getElementById("productcount").textContent = `${braceletData.length} Products`

display(braceletData) ;

    // for sort by price,code starts here

    function sortPrice() {
        var selected = document.querySelector("#sortPrice").value;
        console.log(selected);
        if (selected == "high") {
            braceletData.sort(function (a, b) {
            return Number(b.price) - Number(a.price);
          });
        } else if (selected == "low") {
            braceletData.sort(function (a, b) {
            return Number(a.price) - Number(b.price);
          });
        }
        display(braceletData);
      }

    //   ends here


    var x = document.querySelectorAll("li")
    console.log(x);

    var flag = true;

    document.querySelector("#prodcat").addEventListener("click", function () {
    if (flag) {
        document.querySelector(".hide").style.display = "none";
        return (flag = false);
    } else {
        document.querySelector(".hide").style.display = "block";
        return (flag = true);
    }
    });

    document.querySelector("#featured").addEventListener("change", function () {
    var selected1 = document.querySelector("#featured").textContent;
    console.log(selected1);

    var filarr = braceletData.filter(function (elem) {
    return elem.tag == selected1;
    });

    display(filarr);
    });
    

    document.querySelector("#bestselling").addEventListener("click", function () {
    var selected1 = document.querySelector("#bestselling").textContent;
    console.log(selected1);

    var filarr = braceletData.filter(function (elem) {
    return elem.tag == selected1;
    });

    display(filarr);
    });

// localStorage.setItem("necklaceData",JSON.stringify(necklaces)); 

// var braceletdata = JSON.parse(localStorage.getItem("necklaceData")) || [];

// console.log(braceletdata)



function display(data) {

    document.querySelector("#braceletdiv").innerHTML="";
        
    data.map(function (el) {
    var card = document.createElement("div");
    var hovimage = document.createElement("img");
    card.setAttribute("id", "card");
    // card.addEventListener('mouseover', (el) => {
    //     console.log("mouseover")
    // //      
    //     hovimage.src = el.hovimage;
    // });
    var image = document.createElement("img");
    image.src = el.image;

    var head = document.createElement("p");
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