let HomeAndLivingArr = [
    {
      image_url:
        "asset\\images\\home&living\\brown-beige-bed-runner.jpg",
      name: 'Brown & Beige Colourblocked Anti-Skid Bed Runner',
      price: '₹999',
      strikedoffprice: '₹1999',
      brand: 'Saral Home',
      discount: '50% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\blue-maroon-geometric-carpet.jpg",
      name: 'Blue & Maroon Geometric Printed Premium Anti Skid Runner Carpet',
      price: '₹1219',
      strikedoffprice: '₹1999',
      brand: 'Athom Trendz',
      discount: '39% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\navy-white-rectangular-bed-runner.jpg",
      name: 'Navy Blue & White Printed Rectangular Bed Runner',
      price: '₹527',
      strikedoffprice: '₹1599',
      brand: 'Status',
      discount: '67% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\kids-avenger-ironman-bed-runner.jpg",
      name: 'Kids Avenger Iron Man Printed Bed Runner',
      price: '₹1199',
      strikedoffprice: '₹1999',
      brand: 'Marvel',
      discount: '44% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\black-brown-bed-runner-cushion.jpg",
      name: 'Black & Brown Bed Runner with Cushion Covers',
      price: '₹1099',
      strikedoffprice: '₹2199',
      brand: 'S9home by Seasons',
      discount: '50% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\grey-peach-geometric-bedding-set.jpg",
      name: 'Grey & Peach-Coloured Geometric Printed Cotton 150 GSM Double King Bedding Set',
      price: '₹199',
      strikedoffprice: '₹4999',
      brand: 'BIANCA',
      discount: '60% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\bedding-set-with-comforter.jpg",
      name: 'Bedding Set with Comforter',
      price: '₹4874',
      strikedoffprice: '₹6499',
      brand: 'DDecor',
      discount: '25% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\floral-printed-bedding-set.jpg",
      name: 'Floral Printed Bedding Set',
      price: '₹2749',
      strikedoffprice: '₹5499',
      brand: 'SPACES',
      discount: '₹2750 OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\green-double-king-bedding-set.jpg",
      name: 'Green Double King 4-Piece Bedding Set',
      price: '₹1874',
      strikedoffprice: '₹2499',
      brand: 'JC Collection',
      discount: '25% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\148tc-120gsm-bedding-set.jpg",
      name: '148 TC 120 GSM Bedding Set',
      price: '₹4199',
      strikedoffprice: '₹5999',
      brand: 'Boutiue Living India',
      discount: '30% OFF',
    },
    {
      image_url:
        "C:\\Users\\Anushka\\Downloads\\Ass-3\\Style-Up-E-commerce-Website-\\asset\\images\\home&living\\maroon-grey-reversible-comforter.jpg",
      name: 'Maroon & Grey Microfiber AC Room Double Bed Reversible Comforter',
      price: '₹1199',
      strikedoffprice: '₹3299',
      brand: 'Hammer Home',
      discount: '₹2100 OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\teal-grey-striped-comforter.jpg",
      name: 'Teal & Grey Striped AC Room 210 GSM Double Bed Comforter',
      price: '₹1859',
      strikedoffprice: '₹5999',
      brand: 'Sasimo',
      discount: '₹4140 OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\blue-white-summer-blanket.avif",
      name: 'Blue & White Striped Microfiber AC Room Double Bed Reversible Comforter',
      price: '₹1199',
      strikedoffprice: '₹2999',
      brand: 'Js Collection',
      discount: '60% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\blue-white-summer-blanket.avif",
      name: 'Blue & White Summer 350 GSM Single Bed Blanket',
      price: '₹1949',
      strikedoffprice: '₹2599',
      brand: 'Js Collection',
      discount: '25% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\ac-room-reversible-bed-dohar.jpg",
      name: 'AC Room Reversible Bed Dohar ',
      price: '₹1349',
      strikedoffprice: '₹2999',
      brand: 'Story@Home',
      discount: '33% OFF',
    },
    {
      image_url:
        "asset\\images\\home&living\\grey-peach-geometric-bedding-set.jpg",
      name: 'Black & Grey Printed Mild Winter 150 GSM Double Bed Comforter',
      price: '₹874',
      strikedoffprice: '₹3499',
      brand: 'Aura',
      discount: '75% OFF, Hurry*',
    },
  ]
  
  let cartArr = JSON.parse(localStorage.getItem('cartData')) || []
  window.addEventListener('load', function () {
    cartItems()
  })
  
  function sortByGivenOptions() {
    selected = document.querySelector('#sort').value
    if (selected == 'Ascending') {
      HomeAndLivingArr.sort(function (a, b) {
        if (Number(a.price.substring(1)) > Number(b.price.substring(1))) return 1
        if (Number(a.price.substring(1)) < Number(b.price.substring(1))) return -1
        return 0
      })
      displayPage(HomeAndLivingArr)
    }
    if (selected == 'Descending') {
      HomeAndLivingArr.sort(function (a, b) {
        return Number(b.price.substring(1)) - Number(a.price.substring(1))
      })
      displayPage(HomeAndLivingArr)
    }
    if (selected == 'Discount') {
      HomeAndLivingArr.sort(function (a, b) {
        if (a.discount > b.discount) return -1
        if (a.discount < b.discount) return 1
        return 0
      })
      displayPage(HomeAndLivingArr)
    }
  }
  function filterByGivenOptions() {
    selected = document.querySelector('#filter').value
    let filterList = HomeAndLivingArr.filter(function (el) {
      return el.brand == selected
    })
    displayPage(filterList)
  }
  function sortByNames() {
    selected = document.querySelector('#sortNames').value
    if (selected == 'Ascending') {
      HomeAndLivingArr.sort(function (a, b) {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      displayPage(HomeAndLivingArr)
    }
    if (selected == 'Descending') {
      HomeAndLivingArr.sort(function (a, b) {
        if (a.name > b.name) return -1
        if (a.name < b.name) return 1
        return 0
      })
      displayPage(HomeAndLivingArr)
    }
  }
  
  homeAndLivingArr = JSON.parse(localStorage.getItem('cartData')) || []
  displayPage(HomeAndLivingArr)
  
  function displayPage(HomeAndLivingArr) {
    document.querySelector('#container').innerHTML = ''
    HomeAndLivingArr.forEach(function (el) {
      let box = document.createElement('div')
  
      let img = document.createElement('img')
      img.setAttribute('src', el.image_url)
      let name = document.createElement('h4')
      name.innerText = el.name.substring(0, 27) + '...'
      name.style.fontWeight = 'bold'
      let price = document.createElement('p')
      price.innerHTML = el.price
      let strikedoffprice = document.createElement('p')
      strikedoffprice.innerHTML = el.strikedoffprice
      let discount = document.createElement('p')
      discount.innerHTML = el.discount
      let prices = document.createElement('div')
      //    prices.innerHTML=`<div id="prices" ></div>`
      prices.append(price, strikedoffprice, discount)
      let brand = document.createElement('h4')
      brand.innerText = el.brand
      brand.style.color = 'gray'
      let add2Cart = document.createElement('button')
      add2Cart.innerText = 'Add to Cart'
      add2Cart.addEventListener('click', function () {
        addToCart(el)
      })
      box.append(img, name, brand, prices, add2Cart)
      document.querySelector('#container').append(box)
      //    console.log(box);
    })
  }
  
  function addToCart(ele) {
    let flag = false
    for (let i = 0; i < cartArr.length; i++) {
      if (cartArr[i].name == ele.name) {
        cartArr[i].quantity++
        cartArr[i].cartprice = cartArr[i].price * cartArr[i].quantity
        flag = true
        alert(`Product ${ele.name} Added to Cart ${cartArr[i].quantity} Times`)
      }
    }
    if (!flag) {
      ele.quantity = 1
      ele.price = Number(ele.price.substring(1, ele.price.length))
      ele.cartprice = ele.price * ele.quantity
      cartArr.push(ele)
      alert(`Product ${ele.name} Added to Cart Succesfully`)
    }
    localStorage.setItem('cartData', JSON.stringify(cartArr))
    cartItems()
  }
  function Gotohome() {
    window.location.href = 'index.html'
  }
  function cartItems(){
    let temp = JSON.parse(localStorage.getItem('cartData')) || []
    let items=0
    temp.forEach(function(ele){
      items+=ele.quantity
    })
    document.getElementById("cart-items").innerText=items
  }