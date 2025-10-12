import { useContext } from "react";
import { AppContext } from "../contexto/ContextoApp";
import ListaLibros from "../componentes/ListaLibros";

export default function Favoritos() {
  const { favoritos } = useContext(AppContext);

  return (
    <div className="pagina">
      <h1>❤️ Mis Favoritos</h1>
      {favoritos.length > 0 ? (
        <ListaLibros lista={favoritos} />
      ) : (
        <p>No tienes libros favoritos aún.</p>
      )}
    </div>
  );
}
