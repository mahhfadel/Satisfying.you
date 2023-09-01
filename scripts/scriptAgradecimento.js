// modal
function iniciaModal(modalID) {
	const modal = document.getElementById(modalID)
    modal.classList.add('mostrar');
    timer()
    setTimeout(function(){
        modal.classList.remove('mostrar');
        window.location.href = "../pages/pageColeta.html"
    }, 3000)
}

function timer() {
    var timer = document.getElementById('timer')
    contador = 3

    timer.innerHTML = contador

    if(contador > 0) {
        setInterval(function(){
            contador--
            timer.innerHTML = contador
            console.log(contador)
        }, 1000)
    }
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