let cart = JSON.parse(localStorage.getItem("cart"));
let user = JSON.parse(localStorage.getItem("unique"));
let total_price = cart.reduce((acc,elem,i)=>{
    return acc+elem.price*elem.quantity;
},0)

let price = document.querySelector(".paym");
price.innerText = "Price to Pay:"+" "+"$"+total_price;
let name = document.querySelector(".name");
name.innerText  = user.name;
let random = Math.floor(Math.random()*9000+1000);
let submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
    if(total_price===0){
        alert("Not enough money to pay");
        return;
    }
    window.location.href="otp.html";
})


