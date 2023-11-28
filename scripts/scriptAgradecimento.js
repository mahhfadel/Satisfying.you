//nome da pesquisa que vem da URL
const params = new URLSearchParams(window.location.search)
const nome =  params.get('nome');
// pegando todos as pesquisa
const storage = Array.from(JSON.parse(localStorage.getItem("pesquisaList")));
//pegando o user logado
const userLogin =JSON.parse(localStorage.getItem('userLogin'))
//pegando a prorpia pesquisa
let pesquisaSelecionada=''
storage.forEach((item) => {
    if(nome == item.name && item.userEmail == userLogin.email){
        pesquisaSelecionada = item;
    }
})



// mudando o titulo
window.onload = () =>{
    const titulo = document.getElementById('tituloPesquisaColeta');
    titulo.innerText='O que você achou do '+pesquisaSelecionada.name +' '+ pesquisaSelecionada.data+' ?'
}

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

// pegando o click do pessimo e adicionando na pesquisa e abrindo o modal
const pessimo = document.getElementById('pessimo')
pessimo.addEventListener('click', () => {
    coletarDados('pessimo');
    iniciaModal('modalAgradecimento')
})
// pegando o click do ruim e adicionando na pesquisa e abrindo o modal
const ruim = document.getElementById('ruim')
ruim.addEventListener('click', () => {
    coletarDados('ruim');
    iniciaModal('modalAgradecimento')
})
// pegando o click do neutro e adicionando na pesquisa e abrindo o modal
const neutro = document.getElementById('neutro')
neutro.addEventListener('click', () => {
    coletarDados('neutro');
    iniciaModal('modalAgradecimento')
})
// pegando o click do bom e adicionando na pesquisa e abrindo o modal
const bom = document.getElementById('bom')
bom.addEventListener('click', () => {
    coletarDados('bom');
    iniciaModal('modalAgradecimento')
})
// pegando o click do excelente e adicionando na pesquisa e abrindo o modal
const excelente = document.getElementById('excelente')
excelente.addEventListener('click', () => {
    coletarDados('excelente');
    iniciaModal('modalAgradecimento')
})


const coletarDados = (voto)=>{
    // computando o voto para a pesquisa certa
    // storage declarado nas primeiras linas 
    switch(voto){
        case'pessimo':
            storage.forEach((item) => {
                if(nome == item.name && item.userEmail == userLogin.email){
                        let valorpessimo =item.pessimo+1;
                        item.pessimo = valorpessimo;
                }
            })
            localStorage.setItem('pesquisaList', JSON.stringify(storage))
            break
        case'ruim':
            storage.forEach((item) => {
                if(nome == item.name && item.userEmail == userLogin.email){
                        let valorruim =item.ruim+1;
                        item.ruim = valorruim;
                }
            })
            localStorage.setItem('pesquisaList', JSON.stringify(storage))
            break
        case'neutro':
            storage.forEach((item) => {
                if(nome == item.name && item.userEmail == userLogin.email){
                        let valorneutro =item.neutro+1;
                        item.neutro = valorneutro;
                }
            })
            localStorage.setItem('pesquisaList', JSON.stringify(storage))
            break
        case'bom':
            storage.forEach((item) => {
                if(nome == item.name && item.userEmail == userLogin.email){
                        let valorbom =item.bom +1;
                        item.bom = valorbom;
                }
            })
            localStorage.setItem('pesquisaList', JSON.stringify(storage))
            break
        case'excelente':
            storage.forEach((item) => {
                if(nome == item.name && item.userEmail == userLogin.email){
                        let valorexcelente =item.excelente +1;
                        item.excelente = valorexcelente;
                }
            })
            localStorage.setItem('pesquisaList', JSON.stringify(storage))
            break
    }

}