import { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import CampoTexto from "../components/CampoTexto";
import Botao from "../components/Botao";
import { FazerLogin } from "../services/apiService";
import { SalvarDadosUsuario } from "../services/authService";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  function EnviarFormularioLogin(event) {
    event.preventDefault();
    setMensagemErro("");
    setCarregando(true);

    const credenciais = {
      email: email,
      senha: senha,
    };

    FazerLogin(credenciais)
      .then(function (resposta) {
        if (resposta.status === true) {
          SalvarDadosUsuario(resposta.dados.token, resposta.dados.usuario);
          navigate("/dashboard");
        } else {
          setMensagemErro(resposta.mensagem || "Erro ao fazer login");
        }
        setCarregando(false);
      })
      .catch(function (erro) {
        setMensagemErro("Erro ao conectar com o servidor");
        setCarregando(false);
      });
  }

  function AtualizarEmail(event) {
    setEmail(event.target.value);
  }

  function AtualizarSenha(event) {
    setSenha(event.target.value);
  }

  return (
    <Layout>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <Card titulo="Login">
            <form onSubmit={EnviarFormularioLogin}>
              {mensagemErro && (
                <div className="alert alert-danger" role="alert">
                  {mensagemErro}
                </div>
              )}

              <CampoTexto
                label="Email"
                tipo="email"
                valor={email}
                aoMudar={AtualizarEmail}
                placeholder="Digite seu email"
                obrigatorio={true}
              />

              <CampoTexto
                label="Senha"
                tipo="password"
                valor={senha}
                aoMudar={AtualizarSenha}
                placeholder="Digite sua senha"
                obrigatorio={true}
              />

              <Botao
                texto={carregando ? "Entrando..." : "Entrar"}
                tipo="submit"
                desabilitado={carregando}
              />

              <div className="text-center mt-3">
                <small>
                  Não tem conta? <a href="/registro">Registre-se aqui</a>
                </small>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
