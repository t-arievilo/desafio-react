const CHAVE_NOME_USUARIO = "nomeUsuario";
const CHAVE_TOKEN = "tokenUsuario";

function SalvarDadosUsuario(token, nomeUsuario) {
  localStorage.setItem(CHAVE_TOKEN, token);
  localStorage.setItem(CHAVE_NOME_USUARIO, nomeUsuario);
}

function ObterToken() {
  return localStorage.getItem(CHAVE_TOKEN);
}

function ObterNomeUsuario() {
  return localStorage.getItem(CHAVE_NOME_USUARIO);
}

function VerificarSeEstaAutenticado() {
  const token = ObterToken();
  return token !== null && token !== "";
}

function RemoverDadosDoUsuario() {
  localStorage.removeItem(CHAVE_TOKEN);
  localStorage.removeItem(CHAVE_NOME_USUARIO);
}

export {
  SalvarDadosUsuario,
  VerificarSeEstaAutenticado,
  ObterNomeUsuario,
  ObterToken,
  RemoverDadosDoUsuario,
};
