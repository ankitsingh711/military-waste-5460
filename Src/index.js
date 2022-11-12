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

// Women fetching and displaying

async function getnewArrivalWomen(){
    try{
        let url = "https://636b04fcc07d8f936dac1e85.mockapi.io/women_new_arrival";
        let res = await fetch(url);
        let out = await res.json();
        setInterval(displaynewArrivalWomen(out), 1000);
    }catch (err){
        console.log(err);
    }
}
getnewArrivalWomen();

function displaynewArrivalWomen(data){
    let newArrivalDiv = document.querySelector(".newArrivalWomen");
    let start=0;
    let end=4;
    for(let i=start; i<end; i++){
        let div = document.createElement("div")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("h3");
        image.style.width="250px";
        image.src = data[i].image_url;
        name.innerText = data[i].name;
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
    let nxtBtn = document.querySelector("#rightW");
    nxtBtn.addEventListener("click", ()=>{
        if(end >= data.length-1){
            end=4;
            start=0
        }else{
            start+=4;
            end+=4;
        }

        for(let i=start; i<end; i++){
        let div = document.createElement("div")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("h3");
        image.style.width="250px";
        image.src = data[i].image_url;
        name.innerText = data[i].name;
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
    })
    
}


// Men fetching and displaying section

async function getnewArrivalMen(){
    try{
        let url = "https://636b04fcc07d8f936dac1e85.mockapi.io/men_new_arrival"
        let res = await fetch(url);
        let out = await res.json();
        displaynewArrivalMen(out);
    }catch (err){
        console.log(err);
    }
}
getnewArrivalMen();

function displaynewArrivalMen(data){
    let newArrivalDiv = document.querySelector(".newArrivalMen");
    let start=0;
    let end=4;
    for(let i=start; i<end; i++){
        let div = document.createElement("div")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("h3");
        image.style.width="250px";
        image.src = data[i].image_url;
        name.innerText = data[i].name;
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
    let nxtBtn = document.querySelector("#rightM");
    nxtBtn.addEventListener("click", ()=>{
        if(end >= data.length-1){
            end=4;
            start=0
        }else{
            start+=4;
            end+=4;
        }

        for(let i=start; i<end; i++){
            let div = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("h3");
            let price = document.createElement("h3");
            image.style.width="250px";
            image.src = data[i].image_url;
            name.innerText = data[i].name;
            price.innerText = "$"+data[i].price;
            div.append(image,name,price);
            newArrivalDiv.append(div);
        }
    })
}

// Kids fetch and display data

async function getnewArrivalKid(){
    try{
        let url = "https://636b04fcc07d8f936dac1e85.mockapi.io/kids_new_arrival";
        let res = await fetch(url);
        let out = await res.json();
        displaynewArrivalKid(out);
    }catch (err){
        console.log(err);
    }
}
getnewArrivalKid();

function displaynewArrivalKid(data){
    let newArrivalDiv = document.querySelector(".newArrivalKid");
    let start=0;
    let end=4;
    for(let i=start; i<end; i++){
        let div = document.createElement("div")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("h3");
        image.style.width="250px";
        image.src = data[i].image_url;
        name.innerText = data[i].name;
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
    let nxtBtn = document.querySelector("#rightK");
    nxtBtn.addEventListener("click", ()=>{
        if(end >= data.length-1){
            end=4;
            start=0
        }else{
            start+=4;
            end+=4;
        }

        for(let i=start; i<end; i++){
            let div = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("h3");
            let price = document.createElement("h3");
            image.style.width="250px";
            image.src = data[i].image_url;
            name.innerText = data[i].name;
            price.innerText = "$"+data[i].price;
            div.append(image,name,price);
            newArrivalDiv.append(div);
        }
    })
}


// Life new arrival part starts here 

async function getnewArrivalLife(){
    try{
        let url = "https://636b04fcc07d8f936dac1e85.mockapi.io/life_new_arrival"
        let res = await fetch(url);
        let out = await res.json();
        displaynewArrivalLife(out);
    }catch (err){
        console.log(err);
    }
}
getnewArrivalLife();

function displaynewArrivalLife(data){
    let newArrivalDiv = document.querySelector(".newArrivalLife");
    let start=0;
    let end=4;
    for(let i=start; i<end; i++){
        let div = document.createElement("div")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("h3");
        image.style.width="250px";
        image.src = data[i].image_url;
        name.innerText = data[i].name;
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
    let nxtBtn = document.querySelector("#rightL");
    nxtBtn.addEventListener("click", ()=>{
        if(end >= data.length-1){
            end=4;
            start=0
        }else{
            start+=4;
            end+=4;
        }

        for(let i=start; i<end; i++){
            let div = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("h3");
            let price = document.createElement("h3");
            image.style.width="250px";
            image.src = data[i].image_url;
            name.innerText = data[i].name;
            price.innerText = "$"+data[i].price;
            div.append(image,name,price);
            newArrivalDiv.append(div);
        }
    })
}

// scroll to top functionality
window.onscroll = ()=>{
    scroll_fun()
}
let scrollUp = document.querySelector("#scrollTop");
scrollUp.addEventListener("click", ()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
})

function scroll_fun(){
    if(document.body.scrollTop>25 || document.documentElement.scrollTop>25){
        scrollUp.style.display = "block";
    }else{
        scrollUp.style.display = "none";
    }
}


let playstore = document.querySelector("#playstore");

playstore.addEventListener("click", ()=>{
    window.location.href = "'https://play.google.com/store/apps/details?id=com.exampleapp'"
})

// user login or not :

let islogin = localStorage.getItem("isLogin")||null;
let users = JSON.parse(localStorage.getItem("unique"));
let myacc = document.querySelector(".myAcc");
if(islogin){
    myacc.innerHTML=null;
    myacc.style.padding="20px";
        let change = document.querySelector("#myacc");
        change.innerText = "Hello !"+" "+users.name;
        let name = document.createElement("h3");
        name.innerText = "Hello !"+" "+users.name;
        let prof = document.createElement("h3");
        prof.innerText = "Profession:"+" "+users.acad;
        let gen = document.createElement("h4");
        gen.innerText = "Gender:"+" "+users.gender;
        let email = document.createElement("p");
        email.innerText = "Email:"+" "+users.email;
        let cross = document.createElement("button");
        cross.innerHTML = "&cross;"
        let logout = document.createElement("button");
        logout.innerText = "Logout";
        logout.style.border = "none";
        logout.style.padding="10px 15px";
        logout.style.backgroundColor="black";
        logout.style.color="white";
        logout.addEventListener("click", ()=>{
            localStorage.setItem("isLogin", false);
            myacc.innerHTML = `
                        <h4>Hello !</h4>
                        <button id="close">&cross;</button>
                        <form id="loginform" action="">
                        <label>WLECOME !</label><br><br>
                        <input id="email" type="email" value="" placeholder="Your E-Mail"><br><br>
                        <input id="pass" type="password" placeholder="Password"><br><br>
                        <input id="login" class="submit" type="submit" value="LOG IN">
                        </form>
                        <div>
                        <span>
                            If you have an account with us, log in using your email address and password.
                        </span><br><br>
                        <label>Did you forget your password ?</label><br><br>
                        <a href="signup_login.html">
                            <input id="signup" class="submit" type="submit" value="SIGN UP">
                        </a>
                        </div>
            `;
            let change = document.querySelector("#myacc");
            change.innerText = "My Account";
            let cross = document.querySelector("#cross");
            cross.addEventListener("click", ()=>{
                let showAcc = document.querySelector(".myAcc");
                showAcc.style.display="none";
            })
        })
        cross.addEventListener("click", ()=>{
            let showAcc = document.querySelector(".myAcc");
            showAcc.style.display="none";
        })
        myacc.append(cross,name,prof,gen,email,logout);
}else if(!islogin || islogin===null){
    let change = document.querySelector("#myacc");
    change.innerText = "My Account";
    let cross = document.createElement("button");
    cross.innerHTML = "&cross;";
    cross.setAttribute("id","close");
    cross.addEventListener("click", ()=>{
        let showAcc = document.querySelector(".myAcc");
        showAcc.style.display="none";
    })
    let form = document.createElement("form");
    form.setAttribute("id", "loginform");
    let welc = document.createElement("h5");
    welc.innerText = "Wlecome !";
    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("value", "");
    email.setAttribute("id", "email");
    email.setAttribute("placeholder", "Your E-Mail");
    let pass = document.createElement("input");
    pass.setAttribute("type", "password");
    pass.setAttribute("value", "");
    pass.setAttribute("id", "pass");
    pass.setAttribute("placeholder", "Password");
    let login = document.createElement("input");
    login.setAttribute("id", "login");
    login.setAttribute("class", "submit");
    login.setAttribute("value","LOG IN");
    login.setAttribute("type","submit");
    form.append(email,pass,login);
    form.addEventListener("submit", logins);

    function logins(e){
        e.preventDefault();
        let email = document.querySelector("#email").value;
        let pass = document.querySelector("#pass").value;
        let users = JSON.parse(localStorage.getItem("users"))||null;
        if(email===""||pass===""){
            alert("All fields are mandatory !")
        }else if(email !== users.email){
            alert("User not found")
        }else if(email === users.email && pass !== users.pass){
            alert("Password don't match")
        }else{
            alert("Login Success");
        }
    }


    let signdiv = document.createElement("div");
    let txt = document.createElement("span");
    txt.innerText = "If you have an account with us, log in using your email address and password.";
    let forg = document.createElement("h6");
    forg.innerText = "Did you forget your password ?";
    let anchor = document.createElement("a");
    anchor.href = "signup_login.html";
    let signbtn = document.createElement("input");
    signbtn.setAttribute("id", "signup");
    signbtn.setAttribute("class", "submit");
    signbtn.setAttribute("type", "submit");
    signbtn.setAttribute("value", "SIGN UP");
    anchor.append(signbtn);
    signdiv.append(txt,forg,anchor);
    myacc.append(cross, form,signdiv,);
}


// Mouse enter My account :
let myAcc = document.querySelector("#myacc");
myAcc.addEventListener("mouseenter", showAcc);

function showAcc(){
    let showAcc = document.querySelector(".myAcc");
    showAcc.style.display="block";
    showAcc.addEventListener("mouseenter", ()=>{
        showAcc.style.display="block";
    });
}









