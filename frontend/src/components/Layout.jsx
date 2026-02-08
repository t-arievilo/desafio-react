import Header from "./Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Layout;
