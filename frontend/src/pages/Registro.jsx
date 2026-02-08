import { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import CampoTexto from "../components/CampoTexto";
import Botao from "../components/Botao";
import { RegistrarUsuario } from "../services/apiService";

function Registro() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState("");

  function ValidarSenhasIguais() {
    if (senha !== confirmaSenha) {
      setMensagemErro("As senhas não são iguais");
      return false;
    }
    return true;
  }

  function EnviarFormularioRegistro(event) {
    event.preventDefault();
    setMensagemErro("");
    setMensagemSucesso("");

    if (!ValidarSenhasIguais()) {
      return;
    }

    setCarregando(true);

    const dadosUsuario = {
      usuario: usuario,
      email: email,
      senha: senha,
      confirmaSenha: confirmaSenha,
    };

    RegistrarUsuario(dadosUsuario)
      .then(function (resposta) {
        if (resposta.status === true) {
          setMensagemSucesso(
            resposta.mensagem || "Usuário registrado com sucesso!",
          );
        } else {
          setMensagemErro(resposta.mensagem || "Erro ao registrar usuário");
        }
        setCarregando(false);
      })
      .catch(function (erro) {
        setMensagemErro("Erro ao conectar com servidor");
        setCarregando(false);
      });
  }

  function AtualizarUsuario(event) {
    setUsuario(event.target.value);
  }

  function AtualizarEmail(event) {
    setEmail(event.target.value);
  }

  function AtualizarSenha(event) {
    setSenha(event.target.value);
  }

  function AtualizarConfirmaSenha(event) {
    setConfirmaSenha(event.target.value);
  }

  return (
    <Layout>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <Card titulo="Criar Conta">
            <form onSubmit={EnviarFormularioRegistro}>
              {mensagemErro && (
                <div className="alert alert-danger" role="alert">
                  {mensagemErro}
                </div>
              )}

              {mensagemSucesso && (
                <div className="alert alert-success" role="alert">
                  {mensagemSucesso}
                </div>
              )}

              <CampoTexto
                label="Nome de Usuário"
                tipo="text"
                valor={usuario}
                aoMudar={AtualizarUsuario}
                placeholder="Digite seu nome de usuário"
                obrigatório={true}
              />

              <CampoTexto
                label="Email"
                tipo="email"
                valor={email}
                aoMudar={AtualizarEmail}
                placeholder="Digite seu email"
                obrigatório={true}
              />

              <CampoTexto
                label="Senha"
                tipo="password"
                valor={senha}
                aoMudar={AtualizarSenha}
                placeholder="Digite sua senha"
                obrigatório={true}
              />

              <CampoTexto
                label="Confirmar Senha"
                tipo="password"
                valor={confirmaSenha}
                aoMudar={AtualizarConfirmaSenha}
                placeholder="Confirme sua senha"
                obrigatório={true}
              />

              <Botao
                texto={carregando ? "Registrando..." : "Registrar"}
                tipo="submit"
                desabilitado={carregando}
              />

              <div className="text-center mt-3">
                <small>
                  Já tem conta? <a href="/registro">Faça login aqui</a>
                </small>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Registro;
