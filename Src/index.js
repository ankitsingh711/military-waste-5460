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
    let end = 4;
    let start = 0;
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
    let rightbtnW = document.querySelector("#rightW");
    rightbtnW.addEventListener("click", ()=>{
        slideImg();
    });
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
    let end = 4;
    let start = 0;
    let rightbtnW = document.querySelector("#rightM");
    rightbtnW.addEventListener("click", ()=>{
        if(end >= data.length-1){
            end = 4;
            start = 0;
        }
        else{
            end+=4;
            start+=4;
        }
    })
    for(let i=start; i<end; i++){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.style.width="250px";
        image.src = data[i].image_url;
        let name = document.createElement("h3");
        name.innerText = data[i].name;
        let price = document.createElement("h3");
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
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
    let end = 4;
    let start = 0;
    let rightbtnW = document.querySelector("#rightK");
    rightbtnW.addEventListener("click", ()=>{
        if(end >= data.length-1){
            end = 4;
            start = 0;
        }
        else{
            end+=4;
            start+=4;
        }
    })
    for(let i=start; i<end; i++){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.style.width="250px";
        image.src = data[i].image_url;
        let name = document.createElement("h3");
        name.innerText = data[i].name;
        let price = document.createElement("h3");
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
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
    let end = 4;
    let start = 0;
    let rightbtnW = document.querySelector("#rightL");
    rightbtnW.addEventListener("click", ()=>{
        if(end >= data.length-1){
            end = 4;
            start = 0;
        }
        else{
            end+=4;
            start+=4;
        }
    })
    for(let i=start; i<end; i++){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.style.width="250px";
        image.src = data[i].image_url;
        let name = document.createElement("h3");
        name.innerText = data[i].name;
        let price = document.createElement("h3");
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
    }
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

let cross = document.querySelector("#close");
cross.addEventListener("click", ()=>{
    let showAcc = document.querySelector(".myAcc");
    showAcc.style.display="none";
})


let form = document.querySelector("#loginform");
form.addEventListener("submit", login);

function login(e){
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let users = JSON.parse(localStorage.getItem("users"))||{};
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

let playstore = document.querySelector("#playstore");

playstore.addEventListener("click", ()=>{
    window.location.href = "'https://play.google.com/store/apps/details?id=com.exampleapp'"
})







