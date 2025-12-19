import {BASE_URL} from "./config.js"; 

const assignLink = (anchor, url, text) => {
    anchor.href = url; 
    anchor.title = text; 
}; 


fetch(`${BASE_URL}/products`)
.then(response => response.json())
.then(data => {
    console.log(data)

    // create article for all the products 
    const fragment = document.createDocumentFragment(); 
    data.forEach(product =>{
        const productscard = document.querySelector("#product-card").content.cloneNode(true); 
        const article = productscard.querySelector("article");
        article.classList.add("product-article");

        const linkURL = `product.html?id=${product.id}`

        // Title with link and price 
        const headerLink = productscard.querySelector("h4,h3 > a"); 
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

        fragment.append(productscard);  
    }); 
    document.querySelector("#products-list").append(fragment); 
})
.catch(error => console.log(error))