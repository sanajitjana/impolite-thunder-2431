
    import {object1} from "../object1.js"
    let necklaceData = object1()
    // console.log(necklaceData);

    document.getElementById("productcount").textContent = `${necklaceData.length} Products`

    display(necklaceData);

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

    document.querySelector("#featured").addEventListener("click", function () {
    var selected1 = document.querySelector("#featured").textContent;
    console.log(selected1);

    var filarr = necklaceData.filter(function (elem) {
      return elem.tag == selected1;
    });

    display(filarr);
    });

    document.querySelector("#bestselling").addEventListener("click", function () {
    var selected1 = document.querySelector("#bestselling").textContent;
    console.log(selected1);

    var filarr = necklaceData.filter(function (elem) {
      return elem.tag == selected1;
    });

    display(filarr);
    });



// localStorage.setItem("necklaceData",JSON.stringify(necklaces)); 

// var necklacedata = JSON.parse(localStorage.getItem("necklaceData")) || [];

// console.log(necklacedata)



function display(data) {

    document.querySelector("#necklacediv").innerHTML="";
    
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

    document.querySelector("#necklacediv").append(card)
    fav.addEventListener("click", function () {
        alert("Product is added to wishlist")
        
    })
    })
}
