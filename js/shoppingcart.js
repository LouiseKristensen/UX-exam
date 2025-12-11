import { LOCAL_STORAGE_SHOPPINGCART, BASE_URL } from "./config.js";

const assignLink = (anchor, url, text) => {
    anchor.href = url; 
    anchor.title = text; 
}; 

const queryParams = new URLSearchParams(location.search);
const clothesID = queryParams.get('id');

document.querySelector("#shoppingcartbtn").addEventListener("click", (e) => {
    e.preventDefault(); 
    
    fetch(`${BASE_URL}/products/${clothesID}`)
    .then(response => response.json())
    .then(data => {

        let cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHOPPINGCART)) || [];
        cart.push({
                id: data.id,
                title: data.title,
                price: data.price,
                img: data.image
            });
            
        localStorage.setItem(LOCAL_STORAGE_SHOPPINGCART, JSON.stringify(cart));
        totalProductsCount(); 
        totalPriceCount(); 


        const shoppingcart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHOPPINGCART))
        const product = shoppingcart[shoppingcart.length - 1];
        
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
        thumbnail.setAttribute("src", product.image); 
        thumbnail.setAttribute("alt", product.title); 
        thumbnail.classList.add("thumbnail"); 

        const remove = productscard.querySelector(".remove")
        remove.innerText = "Remove"

        remove.addEventListener("click", (e) => {
            e.preventDefault(); 
            this.closest("article").remove();

            let productcardRemove = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHOPPINGCART));
            const productcardToRemove = productcardRemove.findIndex(remove => remove.id === id && remove.title === title && remove.price === price && remove.image === img)

            productcardRemove = productcardRemove.toSlice(productcardToRemove, 1); 
            localStorage.setItem(LOCAL_STORAGE_SHOPPINGCART, JSON.stringify(productcardRemove))
            totalProductsCount(); 
            totalPriceCount(); 
         
        })

        productscard.append(thumbnail, headerLink, price, remove);  
        document.querySelector("#products-list").appendChild(productscard);


        const totalProductsCount = () => {
            const totalProducts = document.querySelector('#total-products'); 
            totalProducts.innerText = cart.length
        };

        
        const totalPriceCount = () => {
            const totalPrice = document.querySelector("#total-price"); 
            let cartItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHOPPINGCART)) || [];
            let total = cartItem.price 
            totalPrice.innerText = total 
        }; 

    }) 
    .catch(error => console.log(error)); 
}); 
