const CHAVE_EMAIL_USUARIO = "nomeUsuario";

function SalvarDadosUsuario(emailUsuario) {
  localStorage.setItem(CHAVE_EMAIL_USUARIO, emailUsuario);
}

export { SalvarDadosUsuario };
