let nav = document.querySelector(".nav");
window.onresize = ()=>{
    nav_fun();
    imageResize();
}
function nav_fun(){
    let w = window.outerWidth;
    let iconDiv = document.querySelector(".icon");
    let headDiv = document.querySelector(".logo");
    let smallnav = document.querySelector(".smallnav");
    let hideblackdiv = document.querySelector("#hide");
    let bigcard = document.querySelector("#hide2");
    if(w<=876 && w>=100){
        bigcard.style.display="none";
        hideblackdiv.style.display="none"
        smallnav.style.display="none";
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
        hideblackdiv.style.display="flex"
        nav.style.display="flex";
        iconDiv.innerHTML=null;
        iconDiv.style.display="none";
        headDiv.style.display="flex";
        smallnav.style.display="flex"
        bigcard.style.display="flex";
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

// women image media query 
function imageResize(){
    let w = window.outerWidth;
    let img = document.querySelector(".maincard>img");
    if(w<=876 && w>=100){
        
        img.src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/MOBILE_2x_20221107134840.jpg?imwidth=700&imdensity=1";
    }else{
        img.src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/DESKTOP_2x_20221107134833.jpg?imwidth=1180&imdensity=1"
    }
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
    let appendDiv = document.querySelector("#appendPro");
    let end = 4;
    let start = 0;
    for(let i=start; i<end; i++){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.style.width="100%";
        image.src = data[i].image_url;
        let name = document.createElement("h3");
        name.innerText = data[i].name;
        let price = document.createElement("h3");
        price.innerText = "$"+data[i].price;
        div.append(image,name,price);
        newArrivalDiv.append(div);
        appendDiv.append(div)
    }
}

//Login check it's or not:
let login_check = localStorage.getItem("isLogin");
let user = JSON.parse(localStorage.getItem("unique"));
if(login_check){
    let myAcc = document.querySelector("#myacc");
    myAcc.innerText = "Hello !"+" "+user.name;
}else if(!login_check){
    let myAcc = document.querySelector("#myacc");
    myAcc.innerText = "My Account";
}

