import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";
import {
  VerificarSeEstaAutenticado,
  ObterNomeUsuario,
  ObterToken,
} from "../services/authService";

function Dashboard() {
  const navigate = useNavigate();

  const [emailUsuario, setEmailUsuario] = useState("");
  const [token, setToken] = useState("");

  useEffect(function () {
    VerificarAutenticacao();
  }, []);

  function VerificarAutenticacao() {
    const estaAutenticado = VerificarSeEstaAutenticado();

    if (!estaAutenticado) {
      navigate("/login");
      return;
    }

    const usuario = ObterNomeUsuario();
    const tokenSalvo = ObterToken();

    setEmailUsuario(usuario);
    setToken(tokenSalvo);
  }

  return (
    <Layout emailUsuario={emailUsuario}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <Card>
            <div className="text-center">
              <h2 className="mb-4"> Bem-vindo, {emailUsuario}!</h2>

              <div className="alert alert-info mt-4">
                <h5>Use seu token para acessar o endpoint privado:</h5>
                <div className="mt-3">
                  <code
                    style={{
                      wordBreak: "break-all",
                      display: "block",
                      padding: "15px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {token}
                  </code>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
export default Dashboard;
