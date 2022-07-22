import {navbar} from "./navbar.js"
document.getElementById("navbar").innerHTML=navbar();


//--------------------------login js starts-------------------------------------------//

document.querySelector("form").addEventListener("submit", myloginfun);
let data = JSON.parse(localStorage.getItem("Userdetails")) || []

function myloginfun(event){
event.preventDefault();
let email=document.querySelector("#email").value;
let password=document.querySelector("#password").value;
let res=false;
data.map(elem=>{
    if(elem.email==email && elem.password==password){
        res=true;
       
            localStorage.setItem("UserDetails", JSON.stringify(data));
          
        }
    });
    if (res == true) {
        alert("You are successfully logged in");
        location.href="Home.html"
       
    } else {
        alert("Credenials are wrong!!!!!");
        location.href = 'login.html';
    }
}

// ----------------------------login js ends---------------------------------------------//


import {footer} from "./navbar.js";
document.getElementById("footer").innerHTML=footer();