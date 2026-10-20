let womensData = [
  {
    image_url:
      "asset\\images\\women\\women-reebok-print-leggings-2.jpg",
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\unisex-reebok-backpack-1.jpg",
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-high-impact-bra.jpg",
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-pp-tights-1.jpg",
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-pp-tights-2.jpg",
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-classic-leggings.jpg",
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-print-leggings-2.jpg",
    name: "WOMEN'S REEBOK CLASSIC TIGHTS",
    price: 1099,
    strikedoffprice: 1249,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\unisex-reebok-show-shoes.jpg",
    name: "UNISEX REEBOK SHOW SHOES",
    price: 1249,
    strikedoffprice: 1489,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-classic-pants.jpg",
    name: "WOMEN'S CLASSIC REEBOK PANTS",
    price: 1459,
    strikedoffprice: 1235,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-classic-pants.jpg",
          name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
    price: 849,
    strikedoffprice: 2599,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-print-leggings-navy.jpg",
    name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
    price: 1550,
    strikedoffprice: 2599,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-high-impact-bra.jpg",
    name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
    price: 1399,
    strikedoffprice: 6599,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\unisex-reebok-show-shoes.jpg",
    name: "UNISEX REEBOK SHOW SHOES",
    price: 949,
    strikedoffprice: 1899,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-mesh-tights.jpg",
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-running-graphic-tee.jpg",
    name: "WOMEN'S REEBOK RUNNING GRAPHIC TEE",
    price: 1249,
    strikedoffprice: 1749,
    brand: "Addidas",
  },
  {
    image_url:
      "asset\\images\\women\\women-reebok-sleeve-tee-2.jpg",
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: "Reebok",
  },
  {
    image_url:
      "asset\\images\\women\\unisex-reebok-backpack-2.jpg",
    name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
    price: 959,
    strikedoffprice: 1699,
    brand: "Addidas",
  },
  
];

let productscont = document.getElementById("products");

let filterbrand = document.getElementById("filterbrand");

// let cartLS =JSON.parse(localStorage.getItem("cart-page"))||[]
let cartArr = JSON.parse(localStorage.getItem('cartData')) || []
window.addEventListener('load', function () {
  cartItems()
})
function displayProducts(womensData) {
  productscont.innerHTML = "";

  womensData.forEach(function (element, index) {
    let product = document.createElement("div");

    let img = document.createElement("img");
    img.src = element.image_url;

    let name = document.createElement("h5");
    name.innerText = element.name;
    // div for both price
    let pricediv = document.createElement("div");

    let price = document.createElement("p");
    price.innerText = "Rs." + " " + element.price;

    let strikedoffprice = document.createElement("p");
    strikedoffprice.innerText = "   ₹." + " " + element.strikedoffprice;

    pricediv.append(price, strikedoffprice);

    let brand = document.createElement("p");
    brand.innerText = element.brand;

    let AddTocart = document.createElement("button");
    AddTocart.innerText = "Add To Cart";
    AddTocart.addEventListener("click", function(){
      AddTocartFun(element,index)
    })
    product.append(img, name, pricediv, brand, AddTocart);
    productscont.append(product);
  });
}
displayProducts(womensData);

filterbrand.addEventListener("change", function () {
  if (filterbrand.value === "All") {
    displayProducts(womensData);
  } else {
    let filtered = womensData.filter(function (element) {
      return element.brand === filterbrand.value;
    });
    displayProducts(filtered);
  }
});

function handlepricesort() {
  let sortprice = document.querySelector("#sortprice").value;
  
  if (sortprice == "LowToHigh") {
    let filter = womensData.sort(function (a, b) {
      return a.price - b.price;
    });
    displayProducts(filter);
  }
  if (sortprice == "HighToLow") {
    let filter = womensData.sort(function (a, b) {
      return b.price - a.price;
    });
    displayProducts(filter);
  }
}

function AddTocartFun(ele){
  let flag = false
for (let i = 0; i < cartArr.length; i++) {
  if (cartArr[i].name == ele.name) {
    cartArr[i].quantity++
    cartArr[i].cartprice = ele.price * cartArr[i].quantity
    flag = true
    alert(`Product ${ele.name} Added to Cart ${cartArr[i].quantity} Times`)
  }
}
if (!flag) {
  ele.quantity = 1
  ele.cartprice = ele.price * ele.quantity
  cartArr.push(ele)
  alert(`Product ${ele.name} Added to Cart Succesfuly`)
}
localStorage.setItem('cartData', JSON.stringify(cartArr))
cartItems()
}
function cartItems(){
  let temp = JSON.parse(localStorage.getItem('cartData')) || []
  let items=0
  temp.forEach(function(ele){
    items+=ele.quantity
  })
  document.getElementById("cart-items").innerText=items
}