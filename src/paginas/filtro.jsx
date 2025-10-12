import { useContext, useState } from "react";
import { AppContext } from "../contexto/ContextoApp";
import ListaLibros from "../componentes/ListaLibros";

export default function Filtro() {
  const { libros } = useContext(AppContext);
  const [busqueda, setBusqueda] = useState("");

  const filtrados = libros.filter((libro) =>
    libro.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="pagina">
      <h1>🔎 Buscar libros</h1>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ListaLibros lista={filtrados} />
    </div>
  );
}
