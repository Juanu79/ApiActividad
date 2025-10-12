import { useContext } from "react";
import { AppContext } from "../contexto/ContextoApp";
import ListaLibros from "../componentes/ListaLibros";

export default function Home() {
  const { libros } = useContext(AppContext);

  return (
    <div className="pagina">
      <h1>📚 Libros disponibles</h1>
      <ListaLibros lista={libros} />
    </div>
  );
}
