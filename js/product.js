import {BASE_URL, getCartKey} from "./config.js"; 
import { showModal } from './modal.js';

let currentProduct = null;

// content on product page 
const showCards = (info) => {
    currentProduct = info;
    const cardInfo = document.querySelector("#card-info");

    const thumbnail = cardInfo.querySelector("img");
    thumbnail.src = info.image;
    thumbnail.alt = info.title;

    cardInfo.querySelector("h2").innerText = info.title;

    cardInfo.querySelector("#item-rating").innerText = info.rating.rate; 

    cardInfo.querySelector("#item-price").innerText = info.price; 

    cardInfo.querySelector("#item-category").innerText = info.category; 

    cardInfo.querySelector("#item-description").innerText = info.description;  
};

// add product to cart 
document.querySelector("#shoppingcartbtn").addEventListener("click", (e) => {
    e.preventDefault(); 

    const cartKey = getCartKey();

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push({
            id: currentProduct.id,
            title: currentProduct.title,
            price: currentProduct.price,
            img: currentProduct.image
        });
        
    localStorage.setItem(cartKey, JSON.stringify(cart));

    showModal('Added to cart', 'The product has been added to your basket.');

}); 



const queryParams = new URLSearchParams(location.search);
const clothesID = queryParams.get('id');

fetch(`${BASE_URL}/products/${clothesID}`)
.then(response => response.json())
.then(data => {
    showCards(data);
    
    const productPage = document.querySelector("#product-page");
    productPage.innerText = data.title;
})
.catch(error => console.log(error));