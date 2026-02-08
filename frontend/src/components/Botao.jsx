function Botao(props) {
  return (
    <button
      type={props.tipo || "button"}
      className={`btn btn-${props.variante || "primary"} w-100 `}
      onClick={props.aoClicar}
      disabled={props.desabilitado || false}
    >
      {props.texto}
    </button>
  );
}

export default Botao;
