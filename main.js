const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const prodcutDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
prodcutDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}


function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

function createProduct(product){
  let productContainer =  document.querySelector('.product-container');
  const productImage = document.createElement("img");
  productImage.src = "typo3conf/ext/ori_proyectos/res/images/interes.png";
  console.log(product);
  // productContainer.appendChild("")
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.squarespace-cdn.com/content/v1/57d61144e58c62ac0e3179cf/0545ec9c-1eca-4b4d-bf1d-5763a2eea4c8/Propella-blue-orange+background.jpeg',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://www.profesionalreview.com/wp-content/uploads/2020/04/Qu%C3%A9-es-el-contraste-de-una-pantalla-03.jpg',
})
productList.push({
  name: 'Computador',
  price: 620,
  image: 'https://exitocol.vtexassets.com/arquivos/ids/11640397/computador-pc-de-escritorio-torre-gamer-power-group-intel-core-i5-10400f-hdd-1tb-ram-16gb-led-22-full-nvidia-1030.jpg?v=637786562860400000',
});
productList.push({
  name: 'Mouse',
  price: 20,
  image: 'https://falabella.scene7.com/is/image/FalabellaCO/11538620_1?wid=800&hei=800&qlt=70',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);