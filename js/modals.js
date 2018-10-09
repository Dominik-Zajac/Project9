function closeModal(modal) {
    document.querySelector('#modalLogin').parentElement.classList.remove('show')
    document.querySelector('#modalChat').parentElement.classList.remove('show')
    document.querySelector('#modalQuit').parentElement.classList.remove('show')
    document.querySelector('#modalNotification').parentElement.classList.remove('show')
    document.querySelector('#modalWallet').parentElement.classList.remove('show')
}

document.querySelectorAll('.overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        closeModal()
    })
})

document.querySelector('.overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal()
    }
})

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
        closeModal()
    }
})

function openModal(modal) {
    document.querySelectorAll('.overlay > *').forEach(function(modal) {
        modal.classList.remove('show')
    })
    document.querySelector(modal).parentElement.classList.add('show')
}