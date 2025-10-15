import { useContext, useState } from "react";
import { AppContext } from "../contexto/ContextoApp";
import ListaLibros from "../componentes/ListaLibros";

export default function Filtro() {
  const { libros } = useContext(AppContext);
  const [busqueda, setBusqueda] = useState("");
  const [idioma, setIdioma] = useState("todos");
  const [epoca, setEpoca] = useState("todas");

  // Función para clasificar la época según el año de nacimiento del autor
  const obtenerEpoca = (anio) => {
    if (!anio) return "Desconocido";
    if (anio < 1800) return "Antes de 1800";
    if (anio >= 1800 && anio < 1900) return "Siglo XIX";
    if (anio >= 1900 && anio < 2000) return "Siglo XX";
    return "Siglo XXI";
  };

  const filtrados = libros.filter((libro) => {
    const coincideTitulo = libro.title
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideIdioma =
      idioma === "todos" || libro.languages.includes(idioma);

    const anioAutor = libro.authors[0]?.birth_year || null;
    const epocaLibro = obtenerEpoca(anioAutor);

    const coincideEpoca = epoca === "todas" || epocaLibro === epoca;

    return coincideTitulo && coincideIdioma && coincideEpoca;
  });

  return (
    <div className="pagina">
      <h1>🔎 Buscar libros</h1>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
          <option value="todos">Todos los idiomas</option>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="fr">Francés</option>
          <option value="de">Alemán</option>
          <option value="it">Italiano</option>
        </select>

        <select value={epoca} onChange={(e) => setEpoca(e.target.value)}>
          <option value="todas">Todas las épocas</option>
          <option value="Antes de 1800">Antes de 1800</option>
          <option value="Siglo XIX">Siglo XIX (1800–1899)</option>
          <option value="Siglo XX">Siglo XX (1900–1999)</option>
          <option value="Siglo XXI">Siglo XXI (2000+)</option>
        </select>
      </div>

      <ListaLibros lista={filtrados} />
    </div>
  );
}
