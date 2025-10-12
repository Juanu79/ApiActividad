import { useContext } from "react";
import { AppContext } from "../contexto/ContextoApp";
import ListaLibros from "../componentes/ListaLibros";

export default function Original() {
  const { libros } = useContext(AppContext);
  const soloCervantes = libros.filter((libro) =>
    libro.authors.some((a) => a.name.toLowerCase().includes("cervantes"))
  );

  return (
    <div className="pagina">
      <h1>📖 Libros de Miguel de Cervantes</h1>
      <ListaLibros lista={soloCervantes} />
    </div>
  );
}
