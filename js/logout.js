import { LOCAL_STORAGE_USER_EMAIL } from './config.js';

document.querySelector('#btnLogout').addEventListener('click', () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_EMAIL);
    location.reload();
});

document.querySelector('#btnLogoutMobile').addEventListener('click', () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_EMAIL);
    location.reload();
});