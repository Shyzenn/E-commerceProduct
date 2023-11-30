const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navLinks')
const close = document.querySelector('.close')
const imgs = document.querySelectorAll('.imgs')
const close2 = document.querySelector('.largeImg-close')
const largeImgClick = document.querySelector('.largeImg-click-container');
const imageBox = document.getElementById('imageBox')
const dec = document.getElementById('decrement')
const inc = document.getElementById('increment')
const num = document.getElementById('num')
const cartNum = document.querySelector('.cartNum')
const btn = document.querySelector('.btn')
const checkoutContainer = document.querySelector('.checkout-container')
const cartIcon = document.querySelector('.cartContainer')   
const checkoutContainer2 = document.querySelector('.checkout-container2')
const deleteCart = document.querySelector('.delete')
const totalItem = document.getElementById('totalItem')
const totalPrice = document.getElementById('totalPrice')
const leftArrow = document.querySelector('.leftArr');
const rightArrow = document.querySelector('.rightArr');

let count = 0;
let cartCount = 0;
let price = 125.00;

overlay.addEventListener('click', () =>{
    navLinks.style.display = 'none';
    largeImgClick.style.display = 'none';
    overlay.style.display = 'none';
})

hamburger.addEventListener('click', () => {
    overlay.style.display = 'block';
    navLinks.style.display = 'block';

})

cartIcon.addEventListener('click', () => {
    if(cartCount > 0){
        if(checkoutContainer2.style.display === 'none'){
            checkoutContainer2.style.display = 'block'
        } else {
            checkoutContainer2.style.display = 'none'
        }
    } else{
        if(checkoutContainer.style.display === 'none'){
            checkoutContainer.style.display = 'block'
        } else {
            checkoutContainer.style.display = 'none'
        }
    }
})

close.addEventListener('click', () => {
    overlay.style.display = 'none';
    navLinks.style.display = 'none';

})

function Images(smallImg){
    var fullImg = document.getElementById('imageBox');
    fullImg.src = smallImg.src;
}

imageBox.addEventListener('click', () => {
    largeImgClick.style.display = 'block';
    overlay.style.display = 'block';
})

close2.addEventListener('click', () => {
    largeImgClick.style.display = 'none';
    overlay.style.display = 'none';
})

function clickImage(onclickImage){
    var fullImg = document.getElementById('largeImg');
    fullImg.src = onclickImage.src;
}

dec.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

inc.addEventListener('click', () => {
    count++;
    updateCount();
})

const updateCount = () =>{
    num.textContent = count;
}


btn.addEventListener('click', () => {
    cartCount += count;
    count = 0;
    checkoutContainer.style.display = 'none';
    updateCount();
    updateCartNum();
    updateTotalPrice();
})

const updateCartNum = () => {
    cartNum.textContent = cartCount;
};

deleteCart.addEventListener('click', () =>{
    checkoutContainer.style.display = 'block';
    checkoutContainer2.style.display = 'none';
    cartCount = 0;
    updateCartNum();
})

const updateTotalPrice = () => {
    const total = cartCount * price;
    totalItem.textContent = cartCount;
    totalPrice.textContent = ` $${total}.00`;
}

const images = [
    'ProductImg/jordansub1.jpg',
    'ProductImg/jordansub2.jpg',
    'ProductImg/jordansub3.jpg',
    'ProductImg/jordansub4.jpg'
];

leftArrow.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    changeImage(currentIndex)
});

rightArrow.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    changeImage(currentIndex)
});

let currentIndex = 0;
function changeImage(currentIndex) {
    imageBox.src = images[currentIndex];
}