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
let userArr = JSON.parse(localStorage.getItem("users"))||[];


function signin(e){
    e.preventDefault();
    let email_flag = true;
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
    
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    if(!pass.match(passw)){
        alert("Password must contain one Upper case and One lower case and one Number");
        return;
    }

    // let regularExpression = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,10}$/;

    // if(!regularExpression.test(pass)){
    //     alert("Password must contain one small, one capital and one special charecter");
    //     return;
    // }

    if(gender==""||acad==""||fname==""||lname==""||email==""||pass==""||cpass==""){
        alert("All fields are mandatory");
        return;
    }

    userArr.forEach((elem)=>{
        if(elem.email === email){
            email_flag = false;
        }
    })
    if(email_flag===false){
        alert("Already registered Login")
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
        userArr.push(userObj);
        alert("Sign in Successfull");
        localStorage.setItem("users", JSON.stringify(userArr));
        localStorage.setItem("unique", JSON.stringify(userObj));
    }
}

// login functionality

let loginform = document.querySelector(".loginform");
loginform.addEventListener("submit", login);
function login(event){
    event.preventDefault();
    let email_flag = false;
    let pass_flag = false;
    let email = document.querySelector("#logemail").value;
    let pass = document.querySelector("#logpass").value;
    if(email === "" || pass === ""){
        alert("All fields are mandatriy !");
        return;
    }
    console.log(email)
    userArr.forEach((elem)=>{
        if(elem.email === email){
            email_flag = true;
        }
        console.log(elem.email)

        if(elem.pass === pass){
            pass_flag = true;
        }
    })

    if(!email_flag){
        alert("User not found !");
        return;
    }

    if(!pass_flag){
        alert("Password do not match");
        return;
    }

    if(email_flag && pass_flag){
        alert("Login Success");
        localStorage.setItem("isLogin", true);
        window.location.href = "index.html";
    }else{
        localStorage.setItem("isLogin", false);
    }

}