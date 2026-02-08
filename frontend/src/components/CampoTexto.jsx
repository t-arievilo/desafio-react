function CampoTexto(props) {
  return (
    <div className="mb-3">
      <label className="form-label">
        {props.label}
        {props.obrigatorio && <span className="text-danger"> *</span>}
      </label>
      <input
        type={props.tipo || "text"}
        className="form-control"
        value={props.valor}
        onChange={props.aoMudar}
        placeholder={props.placeholder}
        required={props.obrigatorio || false}
      />
    </div>
  );
}

export default CampoTexto;
