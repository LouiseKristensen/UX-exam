import {BASE_URL} from "./config.js"; 

const createLink = (url, text) => {
    const a = document.createElement("a"); 
    a.href = url; 
    a.innerText = text; 
    return a; 
}; 


const showBreadcrumb = (product) => {
    const breadcrumb = document.querySelector(".hero-content h2")

    breadcrumb.appendChild(createLink("/index.html", "Home"));
    breadcrumb.append(" > ");
    breadcrumb.appendChild(createLink("/products.html", "Products"));
    breadcrumb.append(" > ");
    breadcrumb.appendChild(createLink(`product.html?id=${clothesID}`, `${product.title}`));
}; 


const queryParams = new URLSearchParams(location.search);
const clothesID = queryParams.get('id');

fetch(`${BASE_URL}/products/${clothesID}`)
  .then(res => res.json())
  .then(product => showBreadcrumb(product))
  .catch(err => console.log(err));