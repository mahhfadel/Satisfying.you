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

//pegando o elemento para criar o grafico
 const ctx = document.getElementById('myChart');
// criandop o grafico a partir da funçao da prorpia biblioteca
 new Chart(ctx, {
   type: 'pie',//o tipo de grafico no caso o de pizza
   data: {
     datasets: [{
       data: [pesquisaSelecionada.excelente, pesquisaSelecionada.bom, pesquisaSelecionada.neutro,pesquisaSelecionada.ruim,pesquisaSelecionada.pessimo],
       borderWidth: 1,
       backgroundColor: [
        '#F1CE7E', //cor excelente
        '#6994FE', //cor bom
        '#5FCDA4', //cor neutro
        '#EA7288', //cor ruim
        '#53D8D8', //cor pessimo
      ],
     }]
   },
 });