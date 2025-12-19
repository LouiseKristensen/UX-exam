import { LOCAL_STORAGE_USER_EMAIL } from './config.js';

// check email in local storage 
const email = localStorage.getItem(LOCAL_STORAGE_USER_EMAIL);
if (email !== null) {
    document.querySelector('#login').classList.add('hidden');
    document.querySelector('#logout').classList.remove('hidden');
    document.querySelector("#loginMobile").classList.add('hidden'); 
    document.querySelector("#logoutMobile").classList.remove('hidden'); 
    document.querySelector("#shoppingcard").classList.remove('hidden'); 
    document.querySelector("#shoppingcardMobile").classList.remove('hidden'); 

} else {
    document.querySelector('#login').classList.remove('hidden');
    document.querySelector('#logout').classList.add('hidden');
    document.querySelector("#loginMobile").classList.remove('hidden'); 
    document.querySelector("#logoutMobile").classList.add('hidden'); 
    document.querySelector("#shoppingcard").classList.add('hidden'); 
    document.querySelector("#shoppingcardMobile").classList.add('hidden'); 
}