import {navbar} from "./navbar.js"
document.getElementById("navbar").innerHTML=navbar();


// ------------------Signup JS---------------------------------------------//

document.querySelector("form").addEventListener("submit", myfun)

    let data = JSON.parse(localStorage.getItem("Userdetails")) || [];

    function myfun(event) {
        event.preventDefault();

        let email = document.querySelector("#email").value;
        let contact = document.querySelector("#contact").value;
        let password = document.querySelector("#password").value;

        let res = false;

        if (data.length == 0) {
            res = true;
            let dataObj = {
                email: email,
                contact: contact,
                password: password,

            };
            data.push(dataObj)
        } else {
            data.forEach(element => {
                if (element.email == email) {
                    res = false;
                } else {
                    res = true;
                    let dataObj = {
                        email: email,
                        contact: contact,
                        password: password,

                    };
                    data.push(dataObj);
                }
            });
        }
        if (res == true) {
            alert("Data added Successfully,Now you can login");
            localStorage.setItem("Userdetails", JSON.stringify(data));
            location.href = "login.html";
        } else {
            alert("Enter different Email address");
            location.href = "signup.html"
        }
    }

    
    // -----------------------------------signup JS Ends-----------------------------------//

    import { footer } from "./navbar.js";
    document.getElementById("footer").innerHTML=footer();

