function Card(props) {
  return (
    <div className="card shadow">
      {props.titulo && (
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">{props.titulo}</h4>
        </div>
      )}
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
