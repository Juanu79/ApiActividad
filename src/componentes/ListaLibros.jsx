import DetalleLibros from "./DetalleLibros";

export default function ListaLibros({ lista }) {
  if (!lista || lista.length === 0) {
    return <p>No hay libros para mostrar.</p>;
  }

  return (
    <div className="lista">
      {lista.map((libro) => (
        <DetalleLibros key={libro.id} libro={libro} />
      ))}
    </div>
  );
}
