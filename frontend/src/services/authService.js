const CHAVE_EMAIL_USUARIO = "nomeUsuario";
const CHAVE_TOKEN = "tokenUsuario";

function SalvarDadosUsuario(token, emailUsuario) {
  localStorage.setItem(CHAVE_TOKEN, token);
  localStorage.setItem(CHAVE_EMAIL_USUARIO, emailUsuario);
}

function ObterToken() {
  return localStorage.getItem(CHAVE_TOKEN);
}

function VerificarSeEstaAutenticado() {
  const token = ObterToken();
  return token !== null && token !== "";
}

export { SalvarDadosUsuario };
