window.onload = function() {
    var main = document.querySelectorAll(".scrollmenu")[0];
    const storage = Array.from(JSON.parse(localStorage.getItem("pesquisaList")));
    storage.map((item)=>{
        main.appendChild(cretaCard(item.name,item.data,item.image));
    });

    const searchBox = document.getElementById('SearchText')
    searchBox.addEventListener('keyup',()=>{
        let listaPesquisasHTML = document.querySelectorAll('.pesquisas_menu');
        
        Array.from(listaPesquisasHTML).map((item)=>{
            
            if(!item.getAttribute('name').toLocaleLowerCase().includes(searchBox.value.toLocaleLowerCase()) ){
                item.classList.add('none')
            }else{
                item.classList.remove('none')
            }

        })
    })
    
};

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