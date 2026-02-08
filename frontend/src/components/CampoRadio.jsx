import React from "react";

function CampoRadio({ label, nome, opcoes, valorSelecionado, aoMudar }) {
  return (
    <div className="mb-3">
      <label className="form-label d-block">{label}</label>
      {opcoes.map((opcao) => (
        <div className="form-check form-check-inline" key={opcao.id}>
          <input
            className="form-check-input"
            type="radio"
            name={nome}
            id={opcao.id}
            checked={valorSelecionado === opcao.valor}
            onChange={() => aoMudar(opcao.valor)}
          />
          <label className="form-check-label" htmlFor={opcao.id}>
            {opcao.texto}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CampoRadio;
