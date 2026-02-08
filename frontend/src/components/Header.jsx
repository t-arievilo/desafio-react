import { Link, useNavigate } from "react-router-dom";
import { RemoverDadosDoUsuario } from "../services/authService";

function Header(props) {
  const navigate = useNavigate();

  function FazerLogout() {
    RemoverDadosDoUsuario();
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Sistema de Autenticação
        </Link>

        <div className="navbar-nav ms-auto">
          {props.mostrarLogout ? (
            <>
              <span className="navbar-text text-white me-3">
                Olá, {props.nomeUsuario}
              </span>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={FazerLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>

              <Link className="nav-link" to="/registro">
                Registrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
