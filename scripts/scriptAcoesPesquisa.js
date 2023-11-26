function ModificarPesquisa(){
    const params = new URLSearchParams(window.location.search)
    const nome =  params.get('nome');
    window.location.href="ModificarPesquisa.html?nome="+nome;
}