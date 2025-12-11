import { USERS_BASE_URL } from './config.js';
import { showModal } from './modal.js';

document.querySelector('#formSignup').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.txtName.value.trim(); 
    const email = e.target.txtEmail.value.trim();
    const password = e.target.txtPassword.value.trim();
    const repeatPassword = e.target.txtRepeatPassword.value.trim();

    if (password !== repeatPassword) {
        showModal('Validation error', 'Both passwords must match.');
        return false;
    }

    const newUser = {
        name: name, 
        email: email,
        password: password
    };

    fetch(`${USERS_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => { // eslint-disable-line no-unused-vars
        showModal('Signed up', 'The new user was created successfully.');
        e.target.reset();
    })
    .catch(error => console.log(error));
});