import Header from "./Header";

function Layout(props) {
  return (
    <div>
      <Header
        nomeUsuario={props.nomeUsuario}
        mostrarLogout={props.mostrarLogout}
      />
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Layout;
