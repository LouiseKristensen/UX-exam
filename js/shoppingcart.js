import { LOCAL_STORAGE_USER_EMAIL } from "./config.js"; 

const assignLink = (anchor, url, text) => {
    anchor.href = url; 
    anchor.title = text; 
}; 

const userEmail = localStorage.getItem(LOCAL_STORAGE_USER_EMAIL);
const cartKey = `SHOPPING_CART_${userEmail}`; 
let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

// create the article 
const fragment = document.createDocumentFragment(); 

cart.forEach(product => {
    const productscard = document.querySelector("#product-card").content.cloneNode(true); 
    const article = productscard.querySelector("article");
    article.classList.add("product-article");

    const linkURL = `product.html?id=${product.id}`

    // Title with link and price 
    const headerLink = productscard.querySelector("h3 > a"); 
    headerLink.innerText = product.title; 
    assignLink(headerLink, linkURL, product.title); 
    
    const price = productscard.querySelector(".price"); 
    price.innerText = product.price; 

    // image with link 
    const pictureLink = productscard.querySelector("a:has(img)"); 
    assignLink(pictureLink, linkURL, product.title); 

    const thumbnail = productscard.querySelector("img"); 
    thumbnail.setAttribute("src", product.img); 
    thumbnail.setAttribute("alt", product.title); 
    thumbnail.classList.add("thumbnail"); 

    const remove = productscard.querySelector(".remove")
    remove.innerText = "Remove"

    // remove product in local storage and in browser 
    remove.addEventListener("click", function (e) {
        e.preventDefault();

        this.closest("article").remove();

        cart = cart.filter(item => item.id !== product.id);

        localStorage.setItem(cartKey, JSON.stringify(cart));
        totalPriceCount()
        totalProductsCount()
    });

    fragment.append(productscard);  

})
document.querySelector("#shoppingcard-list").append(fragment); 


// count of total products in the cart 
const totalProductsCount = () => {
    const totalProducts = document.querySelector('#total-products'); 
    totalProducts.innerText = cart.length
};
totalProductsCount()


// count of total price in the cart
const totalPriceCount = () => {
    let total = 0 

    cart.forEach(product => {
        total += parseFloat(product.price)    
    }); 
    document.querySelector("#total-price").innerText = total.toFixed(2)  
}; 
totalPriceCount()