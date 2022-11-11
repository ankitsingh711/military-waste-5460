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
    if(w<=876 && w>=100){
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
        nav.style.display="flex";
        iconDiv.innerHTML=null;
        iconDiv.style.display="none";
        headDiv.style.display="flex";
        smallnav.style.display="flex"
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
        
        img.src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Bottega_Act_Big_mobile_x2_20221109094852.jpg?imwidth=700&imdensity=1";
    }else{
        img.src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Bottega_Act_Big_Desktop_x2_20221109094851.jpg?imwidth=1180&imdensity=1"
    }
}

// new arrival hidden 

let newarrtext = document.querySelector(".show");
newarrtext.addEventListener("mouseenter", ()=>{
    let hiddendiv = document.querySelector(".newarrhide");
    hiddendiv.style.display="block";
})
newarrtext.addEventListener("mouseout", ()=>{
    let hiddendiv = document.querySelector(".newarrhide");
    hiddendiv.style.display="none";
})
