import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexto/ContextoApp";

export default function DetalleLibros() {
  const { id } = useParams();
  const { libros } = useContext(AppContext);
  const navigate = useNavigate();

  const libro = libros?.find((l) => l.id === parseInt(id));

  if (!libro) return <p>Libro no encontrado...</p>;

  return (
    <div className="detalle-libro">
      <button className="volver" onClick={() => navigate(-1)}>
        ⬅ Volver
      </button>

      <img
        src={libro.formats["image/jpeg"]}
        alt={libro.title}
        className="portada-detalle"
      />
      <h2>{libro.title}</h2>
      <p><strong>Autor:</strong> {libro.authors[0]?.name || "Desconocido"}</p>
      <p><strong>Idioma:</strong> {libro.languages.join(", ")}</p>
      <p><strong>Descargas:</strong> {libro.download_count}</p>

      <a
        href={libro.formats["text/html"]}
        target="_blank"
        rel="noopener noreferrer"
        className="boton-link"
      >
        🌐 Leer en línea
      </a>

      {/* 🔹 Aquí irá luego el botón de favoritos */}
      <button className="boton-fav">❤️ Agregar a favoritos</button>
    </div>
  );
}
