function cadastrar() {
  var email = document.getElementById("emailInput").value;
  var senha = document.getElementById("senhaInput").value;
  var repetirSenha = document.getElementById("repetirInput").value;
  var spanSenhaNaoConfere = document.getElementById("senhaNaoConfere");

  if (senha !== repetirSenha || senha === "") {
    /*Esse comando é para impedir a pagina de atualizar caso a senha 
    seja diferente ou vazia ao apertar o button do form*/
    event.preventDefault();
    spanSenhaNaoConfere.style.visibility = "visible";
    setTimeout(function(){
      spanSenhaNaoConfere.style.visibility = "hidden";
    }, 3000);
  } else {
    spanSenhaNaoConfere.style.visibility = "hidden";
    // Armazenar dados no localStorage

    var usuario = {
      email: email,
      senha: senha
    };

    // Obtém os usuários existentes do Local Storage ou inicializa um array vazio
    var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Adiciona o novo usuário ao array
    usuariosCadastrados.push(usuario);

    // Armazena o array atualizado de usuários no Local Storage
    localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

    alert("Cadastro realizado com sucesso!");
  }
}