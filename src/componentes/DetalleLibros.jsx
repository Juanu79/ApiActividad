import { useContext } from "react";
import { AppContext } from "../contexto/ContextoApp";

export default function DetalleLibros({ libro }) {
  const { favoritos, toggleFavorito } = useContext(AppContext);

  const esFavorito = favoritos.some((f) => f.id === libro.id);

  return (
    <div className="tarjeta">
      <img
        src={libro.formats["image/jpeg"]}
        alt={libro.title}
        className="imagen"
      />
      <h3>{libro.title}</h3>
      <p>{libro.authors[0]?.name}</p>
      <button onClick={() => toggleFavorito(libro)}>
        {esFavorito ? "💔 Quitar" : "❤️ Favorito"}
      </button>
    </div>
  );
}
