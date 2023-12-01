


//FECHAR MODAL
function fechar () {
    const modal = document.querySelector('.containerModal')
    modal.remove()
}


const div = document.querySelector('.close')
div.addEventListener('click',fechar)