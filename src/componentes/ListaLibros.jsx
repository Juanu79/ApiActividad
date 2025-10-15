import { useNavigate } from "react-router-dom";

export default function ListaLibros({ lista }) {
  const navigate = useNavigate();

  if (!lista || lista.length === 0) {
    return <p>No hay libros disponibles.</p>;
  }

  return (
    <div className="lista-libros">
      {lista.map((libro) => (
        <div key={libro.id} className="tarjeta-libro">
          <img
            src={libro.formats["image/jpeg"]}
            alt={libro.title}
            className="portada"
          />
          <h3>{libro.title}</h3>
          <p>{libro.authors?.[0]?.name || "Autor desconocido"}</p>

          {/* 🔹 Botón de Ver Detalle */}
          <button
            className="boton"
            onClick={() => navigate(`/detalle/${libro.id}`)}
          >
            📖 Ver detalle
          </button>
        </div>
      ))}
    </div>
  );
}
