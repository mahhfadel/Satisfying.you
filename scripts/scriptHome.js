window.onload = function() {
    //=========Construindo cards========================
    //pegando o local onde os cards serao montados
    var main = document.querySelectorAll(".scrollmenu")[0];
    //pegando todas as pesquisas do local storage
    const storage = Array.from(JSON.parse(localStorage.getItem("pesquisaList")));
    //pegandop o usuartio logado
    const userLogin =JSON.parse(localStorage.getItem('userLogin'))
    //pegando as pesquisa somente do usuario
    const minhasPesquisas = storage.map((pesquisa)=>{
        if(pesquisa.userEmail === userLogin.email){
            return  pesquisa
        }
        
    })
    //enviando para funçao qque cria o card e dando apeend (reenderizando) na tela home
    minhasPesquisas.map((item)=>{
        main.appendChild(cretaCard(item.name,item.data,item.image));
    });
    
    //==================Funçao de pesquisa=====================
    //pegando o elemento
    const searchBox = document.getElementById('SearchText')
    searchBox.addEventListener('keyup',()=>{ // toda vez que um tecla e digitada
        // pegando todos os cards pela class pesquisas_menu
        let listaPesquisasHTML = document.querySelectorAll('.pesquisas_menu');
        // transformando essa lista em array para pode trabalhhar melhor
        Array.from(listaPesquisasHTML).map((item)=>{
            //se o atributo nome que esta no card NAO conter a string que esta sendo digitada ele da um displai none pela class none 
            if(!item.getAttribute('name').toLocaleLowerCase().includes(searchBox.value.toLocaleLowerCase()) ){
                item.classList.add('none')
            }else{
                // caso contrario ele retira o display none
                item.classList.remove('none')
            }

        })
    })
    
};

function sair(){
    localStorage.removeItem('userLogin')
    window.location.href = 'index.html'
}

function cretaCard(nome,data,img){
    // titulo
    const CardTitle = document.createElement('h2');
    CardTitle.innerText =nome ;
    CardTitle.classList.add('cardTitle');
    // Data
    const CardDate = document.createElement('h3');
    CardDate.innerText =data  ;
    CardDate.classList.add('cardDate');
    //imagem
    const CardImg = document.createElement('img');
    CardImg.src=img ;
    CardImg.height = 120;
    // div da imagem
    const DivImg = document.createElement('div');
    DivImg.classList.add('cardImg');
    DivImg.append(CardImg);
    // article
    const CardArtticle  = document.createElement('article');
    CardArtticle.classList.add('card')
    CardArtticle.append(DivImg);
    CardArtticle.append(CardTitle);
    CardArtticle.append(CardDate);
    // Card
    const Card = document.createElement('a');
    Card.href ="pageAcoesPesquisa.html?nome="+nome;
    Card.setAttribute('name', nome);
    Card.classList.add("pesquisas_menu");
    Card.append(CardArtticle);

    return Card
}