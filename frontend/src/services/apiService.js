const URL_BASE_API = "https://localhost:5000/api";

function RegistrarUsuario(dadosUsuario) {
  return fetch(`${URL_BASE_API}/Auth/registro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usuario: dadosUsuario.usuario,
      email: dadosUsuario.email,
      senha: dadosUsuario.senha,
      confirmaSenha: dadosUsuario.confirmaSenha,
    }),
  })
    .then(function (resposta) {
      return resposta.json();
    })
    .catch(function (erro) {
      console.error("Erro ao registrar usuário", erro);
      throw erro;
    });
}

export { RegistrarUsuario };
