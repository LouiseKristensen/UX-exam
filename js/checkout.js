import { LOCAL_STORAGE_SHOPPINGCART } from "./config";

document.querySelector('#formPayment').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const deliveryName = e.target.deliveryName.value.trim(); 
    const deliveryStreet = e.target.deliveryStreet.value.trim();
    const deliveryCity = e.target.deliveryCity.value.trim();
    const deliveryZip = e.target.deliveryZip.value.trim();
    const billingName = e.target.billingName.value.trim();
    const billingStreet = e.target.billingStreet.value.trim();
    const billingCity = e.target.billingCity.value.trim();
    const billingZip = e.target.billingZip.value.trim();

    
    const dialog = document.querySelector('#dialogPayment');

    dialog.querySelector('#form-delivery-name').innerText = deliveryName;
    dialog.querySelector('#form-delivery-street').innerText = deliveryStreet;
    dialog.querySelector('#form-delivery-city').innerText = deliveryCity;
    dialog.querySelector('#form-delivery-zip').innerText = deliveryZip;
    dialog.querySelector('#form-billing-name').innerText = billingName;
    dialog.querySelector('#form-billing-street').innerText = billingStreet;
    dialog.querySelector('#form-billing-city').innerText = billingCity;
    dialog.querySelector('#form-billing-zip').innerText = billingZip;

    dialog.showModal();

    e.target.reset();

    dialog.querySelector('button.close').addEventListener('click', (e) => {
        e.preventDefault();

        dialog.close();
    });

    localStorage.removeItem(LOCAL_STORAGE_SHOPPINGCART);
    location.href = 'index.html';
});