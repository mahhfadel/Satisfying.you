function autenticar() {
  // Obtém os valores dos campos de entrada
  var emailDigitado = document.getElementById("emailInput").value;
  var senhaDigitada = document.getElementById("senhaInput").value;

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
    // window.location.href = "PaginaProtegida.html";
  } else {
    event.preventDefault();
    // Exibe mensagem de erro ou realiza outra ação desejada
    alert("Email ou senha incorretos. Tente novamente.");
  }
}