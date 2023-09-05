// modal
function iniciaModal(modalID) {
	const modal = document.getElementById(modalID)
    modal.classList.add('mostrar');
    timerCont()
    setTimeout(function(){
        modal.classList.remove('mostrar');
        state = false
    }, 3000)
}

var state

function timerCont(state = true) {
    var timer = document.getElementById('timer')
    contador = 3

    timer.innerHTML = contador


    let teste = setInterval(function(){
        contador--
        timer.innerHTML = contador
        
        if(contador == 0){
            clearInterval(teste)
        }
    }, 1000)

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