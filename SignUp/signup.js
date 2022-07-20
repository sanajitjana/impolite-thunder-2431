let users=JSON.parse(localStorage.getItem("Students")) || [];

class User{
    #password;
    constructor(n,e,c,p){
        this.uname=n;
        this.email=e;
        this.contact=c
        this.password=p;
    }

    signup(n,e,c,p){
        let isValidated = false;
        isValidated = this.#validateUsername(n)&& this.#validateEmail(e) && this.#validateContact(c)  && this.#validatePassword(p);

        if(isValidated){
            this.uname=n;
            this.email=e;
            this.contact=c;
            this.#password=p;

            users.push(this);
            localStorage.setItem("Students",JSON.stringify(users));
            alert("Registered");
            location.href="studentlogin.html";
        }
    }

    #validateUsername(username) {
        //checking username
        return true;
    }
    #validatePassword(password) {
        //checking password
        return true;
    }
    #validateEmail(email) {
        //checking password
        return true;
    }
    #validateContact(contact){
        return true;
    }

    login(email, password) {
        let res=false,count=0;
        students.forEach(element => {
        console.log(email,password)
        console.log(element.email,element.password)
            if (email === element.email && password === element.password) {
                res=true;
                count++;
            }
        });
        console.log(res,count)
        if(res==true && count>0){
            alert("Logged In!");
            location.href="Home.html"
        }else{
            alert("Authentication failed");
            
        }
    }

}

// signup
let data;
let signupform = ()=>{
    event.preventDefault();
    let name=document.querySelector("#uname").value;
    let email=document.querySelector("#email").value;
    let contact=document.querySelector("#contact").value;
    let password=document.querySelector("#password").value;
    console.log(name,email,password);

    data=new User(name,email,contact,password);
    data.signup(name,email,contact,password);
    console.log(users);
}

let login=()=>{
    event.preventDefault();
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    console.log(email,password)
    data=new User(email,password);
    data.login(email,password);
}