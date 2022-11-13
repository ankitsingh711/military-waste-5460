let nav = document.querySelector(".nav");
window.onresize = () => {
  nav_fun();
};
function nav_fun() {
  let w = window.outerWidth;
  let iconDiv = document.querySelector(".icon");
  let headDiv = document.querySelector(".logo");
  let smallnav = document.querySelector(".smallnav");
  if (w <= 876 && w >= 100) {
    smallnav.style.display = "none";
    nav.style.display = "none";
    iconDiv.innerHTML = "Dropdown &darr;";
    iconDiv.style.fontSize = "15px";
    iconDiv.style.padding = "10px";
    iconDiv.style.width = "100%";
    iconDiv.style.backgroundColor = "whitesmoke";
    iconDiv.style.display = "flex";
    let logoDiv = document.createElement("div");
    let logo = document.createElement("img");
    logo.src = "https://i.ibb.co/wsMzpJ4/My-Project-Logo.png";
    logo.style.width = "100px";
    logoDiv.style.margin = "auto";
    logoDiv.append(logo);
    let cart = document.createElement("span");
    cart.innerText = "Go to Cart";
    cart.style.marginRight = "50px";
    iconDiv.append(logoDiv, cart);
    headDiv.style.display = "none";
  } else {
    nav.style.display = "flex";
    iconDiv.innerHTML = null;
    iconDiv.style.display = "none";
    headDiv.style.display = "flex";
    smallnav.style.display = "flex";
  }
}

// scroll to top functionality
window.onscroll = () => {
  scroll_fun();
};
let scrollUp = document.querySelector("#scrollTop");
scrollUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function scroll_fun() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

let bag;
// fetch women api
let url = "https://636dfb64b567eed48acf0ccf.mockapi.io/women";
async function getdata() {
  try {
    let res = await fetch(url);
    let out = await res.json();
    bag = out;
    displaydata(out);
  } catch (err) {
    console.log(err);
  }
}
getdata();

let main = document.querySelector("#rendproduct");
function displaydata(data) {
  main.innerHTML = null;
  data.forEach((elem, index) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.addEventListener("mouseenter", () => {
      img.src = elem.image_url;
      img.style.width = "100%";
      img.style.cursor = "pointer";
    });

    img.addEventListener("mouseout", () => {
      img.src = elem.avatar;
      img.style.width = "100%";
    });
    let name = document.createElement("h4");
    let category = document.createElement("p");
    let price = document.createElement("span");
    name.innerText = elem.name;
    img.src = elem.avatar;
    category.innerText = elem.category;
    price.innerText = "$" + elem.price;
    div.append(img, name, category, price);
    main.append(div);

    img.addEventListener("click", () => {
      localStorage.setItem("pro-num", index + 1);
      window.location.href = "women_ind.html";
    });
  });

  let pro_count = document.querySelector("#productcount");
  pro_count.innerText = data.length + " " + "Products";
}

// filter the data by input field :

let input = document.querySelector("#search");
input.addEventListener("input", () => {
  let newdata = bag.filter((elem) => {
    return elem.name.toLowerCase().includes(input.value.toLowerCase());
  });
  displaydata(newdata);
});



let sort = document.querySelector("#sort");
sort.addEventListener("change", () => {
  sortdata();
});

function sortdata() {
  if (sort.value === "") {
    displaydata(bag);
  } else if (sort.value === "High to Low") {
    bag.sort((a, b) => {
      return b.price - a.price;
    });
    displaydata(bag);
  } else if (sort.value === "Low to High") {
    bag.sort((a, b) => {
      return a.price - b.price;
    });
    displaydata(bag);
  }
}

let filter = document.querySelector(".filter");
filter.addEventListener("click", () => {
  filterdata();
});
function filterdata() {
  let filterdata = bag.filter((elem) => {
    return elem.category === filter.value;
  });
  displaydata(filterdata);
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
