export const showModal = (header, text) => {
    const modal = document.querySelector('#mdlInfo');
    modal.querySelector('h2').innerText = header;
    modal.querySelector('p').innerText = text;
    modal.showModal();

    //close 
    modal.querySelector('button.close').addEventListener('click', (e) => {
        e.preventDefault(); 
        
        modal.close()
    })
};