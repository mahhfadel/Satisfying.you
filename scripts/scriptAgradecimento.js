// modal
function iniciaModal(modalID) {
	const modal = document.getElementById(modalID)
    modal.classList.add('mostrar');
    setTimeout(function(){
        modal.classList.remove('mostrar');
    }, 3000)
}


const pessimo = document.getElementById('pessimo')
pessimo.addEventListener('click', () => {
    iniciaModal('modalAgradecimento')
})

const ruim = document.getElementById('ruim')
ruim.addEventListener('click', () => {
    iniciaModal('modalAgradecimento')
})

const neutro = document.getElementById('neutro')
neutro.addEventListener('click', () => {
    iniciaModal('modalAgradecimento')
})

const bom = document.getElementById('bom')
bom.addEventListener('click', () => {
    iniciaModal('modalAgradecimento')
})

const excelente = document.getElementById('excelente')
excelente.addEventListener('click', () => {
    iniciaModal('modalAgradecimento')
})