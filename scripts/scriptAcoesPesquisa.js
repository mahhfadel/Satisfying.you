function ModificarPesquisa(){
    const params = new URLSearchParams(window.location.search)
    const nome =  params.get('nome');
    window.location.href="ModificarPesquisa.html?nome="+nome;
}
function ColetarPesquisa(){
    const params = new URLSearchParams(window.location.search)
    const nome =  params.get('nome');
    window.location.href="pageColeta.html?nome="+nome;
}
function RelatorioPesquisa(){
    const params = new URLSearchParams(window.location.search)
    const nome =  params.get('nome');
    window.location.href="pageRelatorio.html?nome="+nome;
}