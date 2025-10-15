import { useContext } from "react";
import { AppContext } from "../contexto/ContextoApp";
import ListaLibros from "../componentes/ListaLibros";
import DetalleLibros from "./componentes/DetalleLibros"; // 👈 Importa el componente

// Dentro de <Routes> agrega:
<Route path="/detalle/:id" element={<DetalleLibros />} />


export default function Home() {
  const { libros } = useContext(AppContext);

  return (
    <div className="pagina">
      <h1>📚 Libros disponibles</h1>
      <ListaLibros lista={libros} />
    </div>
  );
}
