import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Sistema de Autenticação
        </Link>

        <div className="navbar-nav ms-auto">
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>

            <Link className="nav-link" to="/registro">
              Registrar
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
}

export default Header;
