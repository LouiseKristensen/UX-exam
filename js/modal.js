export const showModal = (header, text) => {
    const modal = document.querySelector('#mdlInfo');
    modal.querySelector('h1').innerText = header;
    modal.querySelector('p').innerText = text;
    modal.showModal();

    modal.querySelector('button.close').addEventListener('click', (e) => {
        e.preventDefault(); 
        
        modal.close()
    })
};