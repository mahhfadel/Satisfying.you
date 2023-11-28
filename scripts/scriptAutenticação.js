function autenticar() {
  // Obtém os valores dos campos de entrada
  var emailDigitado = document.getElementById("emailInput").value;
  var senhaDigitada = document.getElementById("senhaInput").value;
  
  var emailSenhaErrado = document.getElementById("emailSenhaErrado");
  // Obtém os usuários cadastrados do Local Storage
  var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Procura pelo usuário com o email correspondente
  var usuarioAutenticado = usuariosCadastrados.find(function(usuario) {
    return usuario.email === emailDigitado && usuario.senha === senhaDigitada;
  });

  // Verifica se o usuário foi encontrado
  if (usuarioAutenticado) {
    // Usuário autenticado com sucesso, realiza ação desejada (pode redirecionar para outra página, por exemplo)
    alert("Login bem-sucedido!");
  } else {
    event.preventDefault();
    emailSenhaErrado.style.visibility = "visible";
    setTimeout(function(){
      emailSenhaErrado.style.visibility = "hidden";
    }, 3000);
  }
}