import { USERS_BASE_URL } from './config.js';
import { showModal } from './modal.js';
import { LOCAL_STORAGE_USER_EMAIL } from './config.js';

// login form 
document.querySelector('#formLogin').addEventListener('submit', (e) => {
    e.preventDefault();

    // get users and save email in local storage 
    fetch(`${USERS_BASE_URL}/users`)
    .then(response => response.json())
    .then(data => {
        const email = e.target.txtEmail.value.trim();
        const password = e.target.txtPassword.value.trim();

        let found = false;
        data.forEach(user => {
            if (!found) {
                if (user.email === email && user.password === password) {
                    localStorage.setItem(LOCAL_STORAGE_USER_EMAIL, email);
                    location.href = 'index.html';
                    
                    found = true;
                }
            }
        });

        if (!found) {
            showModal('Validation error', 'Incorrect credentials.');
        }
    })
    .catch(error => console.log(error));
});