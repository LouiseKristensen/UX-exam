import {BASE_URL} from "./config.js"; 

const showCards = (info) => {
    const cardInfo = document.querySelector("#card-info");

    const thumbnail = cardInfo.querySelector("img");
    thumbnail.src = info.image;
    thumbnail.alt = info.title;

    cardInfo.querySelector("h3").innerText = info.title;

    cardInfo.querySelector("#item-rating").innerText = info.rating.rate

    cardInfo.querySelector("#item-price").innerText = info.price

    cardInfo.querySelector("#item-description").innerText = info.description 
};

const queryParams = new URLSearchParams(location.search);
const clothesID = queryParams.get('id');

fetch(`${BASE_URL}/products/${clothesID}`)
.then(response => response.json())
.then(data => {
    showCards(data);
})
.catch(error => console.log(error));