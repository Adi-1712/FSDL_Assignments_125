window.addEventListener("load",function(){
    cartItems()
  })
  
  //crausers data and functionality
  let crauser1 = [
    "asset\\images\\index\\banner-brands-starting-299.webp",
    "asset\\images\\index\\banner-brands-under-2999.avif",
    "asset\\images\\index\\banner-trends-flat70.jpg",
    "asset\\images\\index\\banner-brands-4060.jpg",
  ]
  let img = document.querySelector('#image_url')
  let imgNum = 0
  let prev = document
    .querySelector('.prev')
    .addEventListener('click', function () {
      if (imgNum == 0) {
        imgNum = crauser1.length - 1
      } else {
        imgNum--
      }
      img.src = crauser1[imgNum]
    })
  let next = document
    .querySelector('.next')
    .addEventListener('click', function () {
      if (imgNum == crauser1.length - 1) {
        imgNum = 0
      } else {
        imgNum++
      }
      img.src = crauser1[imgNum]
    })
  
  let crauser2 = [
    "asset\\images\\index\\banner2-brands-min60.avif",
    "asset\\images\\index\\banner2-performax-upto70.avif",
    "asset\\images\\index\\banner2-bestofbrands-min70.jpg",
    "asset\\images\\index\\banner2-brands-700off.jpg",
  ]
  let img2 = document.querySelector('#image2_url')
  let img2Num = 0
  let prev1 = document
    .querySelector('.prev1')
    .addEventListener('click', function () {
      if (img2Num == 0) {
        img2Num = crauser2.length - 1
      } else {
        img2Num--
      }
      img2.src = crauser2[img2Num]
    })
  let next2 = document
    .querySelector('.next1')
    .addEventListener('click', function () {
      if (img2Num == crauser2.length - 1) {
        img2Num = 0
      } else {
        img2Num++
      }
      img2.src = crauser2[img2Num]
    })
  // products products_grid added here
  let products_grid1 = [
    "asset\\images\\index\\grid1-category-1.webp",
    "asset\\images\\index\\grid1-bed-linen.webp",
    "asset\\images\\index\\grid1-category-3.webp",
    "asset\\images\\index\\grid1-category-4.webp",
    "asset\\images\\index\\grid1-category-4.webp",
    "asset\\images\\index\\grid1-category-5.webp",
    "asset\\images\\index\\grid1-category-6.webp",
    "asset\\images\\index\\grid1-category-7.webp",
    "asset\\images\\index\\grid1-category-8.webp"  ]
  let products_grid2 = [
    "asset\\images\\index\\grid2-watches.webp",
    "asset\\images\\index\\grid2-track-pants.webp",
    "asset\\images\\index\\grid2-skincare.webp", //skincare
    "asset\\images\\index\\grid2-grooming.webp",
    "asset\\images\\index\\grid2-fragrances.webp",
    "asset\\images\\index\\grid2-tops-tees.webp",
    "asset\\images\\index\\grid2-activewear.webp",
    "asset\\images\\index\\grid2-formal-shoes.webp",
    "asset\\images\\index\\grid2-bras-briefs.webp",
  ]
  let grid1 = document.getElementById('products_grid1')
  let grid2 = document.getElementById('products_grid2')
  
  addProductsGrid(products_grid1,grid1)
  addProductsGrid(products_grid2,grid2)
  
  function addProductsGrid(arr,grid) {
    arr.forEach(function (ele) {
      let card = document.createElement('div')
      let image_url = document.createElement('img')
      image_url.setAttribute('src', ele)
      card.append(image_url)
      grid.append(card)
    })
  }
  
  function cartItems(){
    let temp = JSON.parse(localStorage.getItem('cartData')) || []
    let items=0
    temp.forEach(function(ele){
      items+=ele.quantity
    })
    document.getElementById("cart-items").innerText=items
  }