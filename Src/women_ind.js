let proNumber = localStorage.getItem("pro-num");
let url = "https://636dfb64b567eed48acf0ccf.mockapi.io/women/";
async function getdata() {
  try {
    let res = await fetch(url + proNumber);
    let out = await res.json();
    displayPro(out);
  } catch (err) {
    console.log(err);
  }
}
getdata();

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
function displayPro(elem) {
  console.log(elem);
  let prodet = document.querySelector(".prodet");
  let imgdiv = document.createElement("div");
  let tdiv = document.createElement("div");
  let img = document.createElement("img");
  img.src = elem.avatar;
  let name = document.createElement("h3");
  name.innerText = "Name:" + " " + elem.name;
  let price = document.createElement("h3");
  price.innerText = "Price:" + " " + "$" + elem.price;
  let cat = document.createElement("h3");
  cat.innerText = "Category:" + " " + elem.category;
  let des = document.createElement("p");
  des.innerText = "Description" + ":" + elem.description;
  let rating = document.createElement("h4");
  rating.innerText = "Ratings:" + " " + eval(elem.rating / 10) + "/10";
  let add = document.createElement("button");
  add.innerText = "Add To Shopping Bag";
  let next = document.createElement("br");
  let next2 = document.createElement("br");
  let place = document.createElement("span");
  let van_icon = document.createElement("i");
  let free = document.createElement("i");
  free.setAttribute("class", "fa-solid fa-gift");
  van_icon.setAttribute("class", "fa-sharp fa-solid fa-truck-fast");
  place.innerText =
    "If order is placed within the 4 days then deleivery charges will not be added";
  add.addEventListener("click", () => {
    let elem_flag = true;
    cartArr.forEach((elements) => {
      if (elements.id === elem.id) {
        elem_flag = false;
      }
    });

    if (!elem_flag) {
      alert("Product already in the cart");
      return;
    }

    if (elem_flag) {
      alert("Producted added to the cart");
      cartArr.push({ ...elem, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cartArr));
    }
  });
  imgdiv.append(img);
  tdiv.append(
    name,
    price,
    cat,
    rating,
    des,
    add,
    next,
    place,
    next2,
    van_icon,
    free
  );
  prodet.append(imgdiv, tdiv);
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



