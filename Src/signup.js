let nav = document.querySelector(".nav");
window.onresize = ()=>{
    nav_fun();
}
function nav_fun(){
    let w = window.outerWidth;
    let iconDiv = document.querySelector(".icon");
    let headDiv = document.querySelector(".logo");
    if(w<=876 && w>=100){
        nav.style.display="none";
        iconDiv.innerHTML="Dropdown &darr;";
        iconDiv.style.fontSize="15px";
        iconDiv.style.padding="10px";
        iconDiv.style.width="100%";
        iconDiv.style.backgroundColor="whitesmoke";
        iconDiv.style.display="flex";
        let logoDiv = document.createElement("div");
        let logo = document.createElement("img");
        logo.src="https://i.ibb.co/wsMzpJ4/My-Project-Logo.png";
        logo.style.width="100px";
        logoDiv.style.margin="auto"
        logoDiv.append(logo);
        let cart = document.createElement("span");
        cart.innerText="Go to Cart";
        cart.style.marginRight="50px"
        iconDiv.append(logoDiv,cart);
        headDiv.style.display="none";
    }else{
        nav.style.display="flex";
        iconDiv.innerHTML=null;
        iconDiv.style.display="none";
        headDiv.style.display="flex";
    }
}



// sign up 
let signform = document.querySelector(".signup");
signform.addEventListener("submit", signin);

function signin(e){
    e.preventDefault();
    let gender = document.querySelector(".gender").value;
    let acad = document.querySelector("#academic").value;
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#cpass").value;
    let userObj={
        gender,
        acad,
        name: fname+" "+lname,
        email,
        pass,
    }

    if(gender==""||acad==""||fname==""||lname==""||email==""||pass==""||cpass==""){
        alert("All fields are mandatory")
    }else{
        if(cpass !== pass){
            alert("Password do not match")
            return;
        }
        let check = document.querySelector(`input[name="t&c"]:checked`);
        if(check === null){
            alert("Please accept Terms and Condition");
            return;
        }
        localStorage.setItem("users", JSON.stringify(userObj));
    }
}

// login functionality

let loginform = document.querySelector(".loginform");
loginform.addEventListener("submit", login);
function login(event){
    let users = JSON.parse(localStorage.getItem("users"));
    event.preventDefault();
    let email = document.querySelector("#logemail").value;
    let pass = document.querySelector("#logpass").value;
    if(email === "" || pass === ""){
        alert("All fields are mandatriy !");
        return;
    }
    
    if(users.email != email ){
        alert("User Not Found Sign Up");
        return;
    }

    if(users.email === email && users.pass !== pass){
        alert("Password do not match");
    }

    if(users.email === email && users.pass === pass){
        alert("Login Success");
        window.location.href="index.html";
    }

}