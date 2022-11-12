let cart = JSON.parse(localStorage.getItem("cart"));
let user = JSON.parse(localStorage.getItem("unique"));
let total_price = cart.reduce((acc,elem,i)=>{
    return acc+elem.price*elem.quantity;
},0)

let price = document.querySelector(".paym");
price.innerText = "Price to Pay:"+" "+"$"+total_price;
let name = document.querySelector(".name");
name.innerText  = user.name;

let submit = document.querySelector("#submit");
let otp = document.querySelector(".otp");
let otp_val = document.querySelector(".otpval").value;
let show_otp = document.querySelector(".showotp");
submit.addEventListener("click", () => {
    otp.style.display="block";
    show_otp.innerText = "Your OTP is: 3245";
    let otp_submit = document.querySelector("#otp_submit");
    otp_submit.addEventListener("click", () => {
        otpCheck(); 
    })
})


function otpCheck(){
    console.log(otp_val)
    if(otp_val === "3245"){
        alert("Payment Success");
        otp.style.display="none";
        localStorage.setItem("cart", JSON.stringify([]));
        window.location.href="cart.html";
    }else if(otp_val !== "3245"){
        alert("OTP is wrong");
        otp.style.display="none";
    }
}